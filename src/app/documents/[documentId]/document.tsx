"use client"
import Editor from "./editor";
import Toolbar from "./toolbar";
import Navbar from "./navbar";
import { Room } from "./room";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}
const Document = ({ preloadedDocument }: DocumentProps) => {
  const document = usePreloadedQuery(preloadedDocument);
  return (
    <Room>
    <div className="min-h-[100dvh] bg-[#fafbfd]">
      <div className="flex flex-col pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
        <Navbar data={document} />
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
          <Editor initialContent={document.initialContent}/>
      </div>
    </div>
    </Room>
  );
};

export default Document;
