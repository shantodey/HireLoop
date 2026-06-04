'use client'
import { useState } from "react";
import logo from "@/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import {Button} from "@heroui/react";
const nevBarLinkMobile = [
    <li key={1} ><Link href="#">Browse Jobs</Link></li>,
    <li key={2} ><Link href="#">Company</Link></li>,
    <li key={3} ><Link href="#">Pricing</Link></li>,
    <li key={4} ><Link href="/auth/login">Sign In</Link></li>,
    <li key={5} ><Link href="#">Get Started</Link></li>,
];
const nevBarLinkPc = [
    <li  key={1}><Link href="#">Browse Jobs</Link></li>,
    <li  key={2}><Link href="#">Company</Link></li>,
    <li  key={3}><Link href="#">Pricing</Link></li>,
    <div key={4} className="w-px h-7 bg-white mx-1"></div>,
    <li  key={5}><Link href="/auth/login" className="text-[#8B5CF6]">Sign In</Link></li>,
    <li  key={6} className="bg-white text-black p-3 rounded-xl "><Link href="#">Get Started</Link></li>,
];
const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, isPending, error,  refetch } = authClient.useSession() ;
    const user=session?.user;
    console.log(session);
    const onClick= async()=>{
        await authClient.signOut();
    }
    return (
        <nav className="sticky top-0 pt-3 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
            <div className="container mx-auto">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" >
                            {isMenuOpen ? (
                                <HiOutlineX className="h-6 w-6" />
                            ) : (
                                <HiOutlineMenu className="h-6 w-6" />
                            )}
                        </button>
                        <Image src={logo} height={50} width={150} alt="logo" />
                    </div>
                    <ul className="hidden md:flex items-center gap-6 bg-[#282626] border border-white/5 p-2 px-4 rounded-xl shadow-lg">
                        {nevBarLinkPc}
                        {user?
                        <>
                        <h1>hi {user.name}</h1>
                         <Button onClick={onClick} variant="danger">Log Out</Button>
                        </>
                        :
                        <></>
                        }
                    </ul>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-white/10 md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            {nevBarLinkMobile}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navber;


