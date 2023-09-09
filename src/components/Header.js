"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { WebSiteContext } from "@/app/layout";

const Header = () => {
  const SiteData = useContext(WebSiteContext);
  const pathname = usePathname();

  return (
    <header>
      <div id="headerTitle">
        <Link href="/">
          <Image
            src={SiteData.header.logo_src}
            alt={SiteData.header.logo_alt}
            width={298}
            height={185}
          />
        </Link>
        <h1>{SiteData.header.title}</h1>
      </div>
      <nav>
        <ul>
          {SiteData.header.navbar &&
            SiteData.header.navbar.map((navLink, index) => (
              <li key={index} id={`linkTo${navLink.text}`}>
                <Link
                  href={navLink.href}
                  className={pathname === `${navLink.href}` ? "active" : ""}
                >
                  {navLink.text}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div id="headerUnderline"></div>
    </header>
  );
};

export default Header;
