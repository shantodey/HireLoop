"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@heroui/react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/images/logo.png";

const footerLinks = {
  Product: ["Job discovery", "Worker AI", "Companies", "Salary data"],
  Navigation: ["Help center", "Career library", "Contact"],
  Resources: ["Brand Guideline", "Newsroom"],
};

const socialIcons = [
  <FaFacebookF size={16} key={1} />,
  <FaPinterestP size={16} key={2} />,
  <FaLinkedinIn size={16} key={3} />,
  <FaXTwitter size={16} key={4} />,
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src={logo} alt="logo" width={150} height={50} />
            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              The AI-native career platform. Built for people who take their work seriously.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socialIcons.map((icon, index) => (
                <Link key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition hover:bg-violet-600">
                  {icon}
                </Link>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-base font-medium text-violet-500"> {title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-zinc-400 transition hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-white/10" />
        <div className="flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2024 — Programming Hero</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="#" className="transition hover:text-white"> Terms & Policy</Link>
            <Link href="#" className="transition hover:text-white"> Privacy Guideline </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;