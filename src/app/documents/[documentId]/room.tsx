"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { FullScreenLoader } from "@/components/fullscreen_loader";
import { toast } from "sonner";
import { getDocuments, getUsers } from "./actions";
import { Id } from "../../../../convex/_generated/dataModel";

type User = { id: string; name: string; avatar: string; color: string };
export function Room({ children }: { children: ReactNode }) {
  const params = useParams();
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = useMemo(
    ()=> async () => {
      try {
        const list = await getUsers();
        setUsers(list);
      } catch {
        toast.error("Failed to fetch users")
      }
    },
    []
  )
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers])
  return (
    <LiveblocksProvider
      throttle={16}
      authEndpoint={async()=>{
        const response = await fetch("/api/liveblocks-auth", {
          method: "POST",
          body: JSON.stringify({ room: params.documentId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to authenticate");
        }
        return await response.json();
      }}
      resolveUsers={({userIds})=>{
        return userIds.map(
          (userId)=>users.find((user)=>user.id === userId ) ?? undefined
        )
      }}
      resolveMentionSuggestions={({text}) => {
        let filteredUsers = users;
        if(text){
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
          );
        }
        return filteredUsers.map((user) => user.id);
      }}
      resolveRoomsInfo={async ({roomIds}) => {
        const documents = await getDocuments(roomIds as Id<"documents">[]);
        return documents.map((document) => ({
          id: document.id,
          name: document.name,
        }));
      }}
    >
      <RoomProvider id={params.documentId as string} initialStorage={{ leftMargin: 56, rightMargin: 56}}>
        <ClientSideSuspense
          fallback={<FullScreenLoader label="Room Loading...." />}
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
