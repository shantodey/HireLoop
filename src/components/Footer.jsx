"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@heroui/react";
import logo from"@/images/logo.png";
import { FaFacebookF, FaLinkedinIn,  FaPinterestP} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const productLinks = [
    { label: "Job discovery", href: "#" },
    { label: "Worker AI", href: "#" },
    { label: "Companies", href: "#" },
    { label: "Salary data", href: "#" },
];

const navigationLinks = [
    { label: "Help center", href: "#" },
    { label: "Career library", href: "#" },
    { label: "Contact", href: "#" },
];

const resourceLinks = [
    { label: "Brand Guideline", href: "#" },
    { label: "Newsroom", href: "#" },
];

const socialLinks = [
    {
        icon: <FaFacebookF size={16} />,
        href: "#",
        label: "Facebook",
    },
    {
        icon: <FaPinterestP size={16} />,
        href: "#",
        label: "Pinterest",
    },
    {
        icon: <FaLinkedinIn size={16} />,
        href: "#",
        label: "LinkedIn",
    },
    {
        icon: <FaXTwitter size={16} />,
        href: "#",
        label: "Twitter",
    },
];

const FooterColumn = ({ title, links }) => {
    return (
        <div>
            <h3 className="mb-5 text-base font-medium text-violet-500">
                {title}
            </h3>

            <ul className="space-y-4">
                {links.map((item) => (
                    <li key={item.label}>
                        <Link
                            href={item.href}
                            className="text-sm text-zinc-400 transition hover:text-white"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
            <div className="absolute inset-0 opacity-30  [background-image:radial-gradient(circle_at_top,rgba(124,58,237,0.20),transparent_40%)]" />

            <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    {/* Left Side */}
                    <div>
                        {/* Logo Area */}
                        <div className="min-h-15">
                           <Image src={logo} alt="logo" height={50} width={150}/>
                        </div>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400 sm:text-base">
                            The AI-native career platform. Built for people who
                            take their work seriously.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-10 flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 transition hover:-translate-y-1 hover:bg-violet-600"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    <FooterColumn
                        title="Product"
                        links={productLinks}
                    />

                    <FooterColumn
                        title="Navigations"
                        links={navigationLinks}
                    />

                    <FooterColumn
                        title="Resources"
                        links={resourceLinks}
                    />
                </div>

                <Separator className="my-10 bg-white/10" />

                {/* Bottom */}
                <div className="flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
                    <p>Copyright 2024 — Programming Hero</p>

                    <div className="flex flex-wrap items-center gap-5">
                        <Link
                            href="#"
                            className="transition hover:text-white"
                        >
                            Terms & Policy
                        </Link>

                        <Link
                            href="#"
                            className="transition hover:text-white"
                        >
                            Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;