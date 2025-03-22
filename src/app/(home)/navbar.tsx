import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './search_input'
import { UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-full w-full gap-2'>
        <div className='flex gap-3 items-center shrink-0'>
           <Link href="/">
             <Image src="/logo.png" alt="logo" width={120} height={120}/>
           </Link>
        </div>
        <SearchInput/>
        <UserButton/>
    </nav>
  )
}

export default Navbar