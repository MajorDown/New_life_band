"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div id="headerTitle">
        <Link href="/">
          <Image
            src="/header_logo.png"
            alt="New Life"
            width={298}
            height={185}
          />
        </Link>
        <h1>Site Officiel du groupe de blues rock </h1>
      </div>
      <nav>
        <ul>
          <li id="linkToMedias">
            <Link
              href="/medias"
              className={pathname === "/medias" ? "active" : ""}
            >
              Medias
            </Link>
          </li>
          <li id="linkToDates">
            <Link
              href="/dates"
              className={pathname === "/dates" ? "active" : ""}
            >
              Dates
            </Link>
          </li>
          <li id="linkToBio">
            <Link href="/bio" className={pathname === "/bio" ? "active" : ""}>
              Bio
            </Link>
          </li>
          <li id="linkToNews">
            <Link href="/news" className={pathname === "/news" ? "active" : ""}>
              News
            </Link>
          </li>
        </ul>
      </nav>
      <div id="headerUnderline"></div>
    </header>
  );
};

export default Header;
