'use client'

import { FaSearch } from "react-icons/fa";
import Link from "next/link"

export default function Navbar(){
    return (
        <div className="flex justify-center items-center py-4 px-8 gap-8 bg-yellow-200 text-amber-700">
            <div className="flex flex-1">
                <h1 className="text-3xl font-bold">Ocean Math</h1>
            </div>
            <div className="flex flex-3 justify-center gap-4">
                <Link href={'/'}>
                    <h1 className="font-bold">HOME</h1>
                </Link>
                <Link href={'/about'}>
                    <h1 className="font-bold">ABOUT</h1>
                </Link>
                <Link href={'/characters'}>
                    <h1 className="font-bold">CHARACTERS</h1>
                </Link>
                <Link href={'/updates'}>
                    <h1 className="font-bold">UPDATES</h1>
                </Link>
            </div>
            <div className="flex flex-1 justify-end gap-4 pr-8">
                <FaSearch />
            </div>
        </div>
    )
}