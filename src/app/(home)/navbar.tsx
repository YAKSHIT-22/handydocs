import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './search_input'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-full w-full'>
        <div className='flex gap-3 items-center shrink-0 pr-6'>
           <Link href="/">
             <Image src="/logo.png" alt="logo" width={120} height={120}/>
           </Link>
        </div>
        <SearchInput/>
        <div/>
    </nav>
  )
}

export default Navbar