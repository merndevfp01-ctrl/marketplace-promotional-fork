import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between py-4 px-20'>
            <div>
                <Image src={"/Logo (2).png"} height={80} width={80}/>
            </div>
            <div className='flex items-center gap-8 text-xl text-white font-medium'>
                <Link href={"/"} className='no-underline'>Home</Link>
                <Link href={"/"} className='no-underline text-white'>Contact Us</Link>
            </div>
        </div>
    )
}
