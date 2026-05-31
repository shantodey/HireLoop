'use client'
import { useState } from "react";
import logo from"@/images/logo.png";
import Link from "next/link";
import Image from "next/image";
const nevBarLink = [
    <li key={1} ><Link href="#">Browse Jobs</Link></li>,
    <li key={2} ><Link href="#">Company</Link></li>,
    <li key={3} ><Link href="#">Pricing</Link></li>,
    <li key={4} ><Link href="#">Sign In</Link></li>,
    <li key={5} ><Link href="#">Get Started</Link></li>,
];
const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="container mx-auto">
            <nav className="sticky top-0 z-40 w-full border-b border-separator backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <div>
                            <Image src={logo} height={50} width={150} alt="logo"/>
                        </div>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                        {nevBarLink}

                    </ul>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                           {nevBarLink}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navber;


