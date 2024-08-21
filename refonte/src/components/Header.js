"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSiteDataContext } from "../contexts/SiteDataContext";

const Header = () => {
  const { siteData, updateSiteData } = useSiteDataContext();
  const pathname = usePathname();

  return (
    <header>
      <div id="headerTitle">
        <Link href="/">
          <Image
            src={siteData.header.logo_src}
            alt={siteData.header.logo_alt}
            width={298}
            height={185}
          />
        </Link>
        <h1>{siteData.header.title}</h1>
      </div>
      <nav>
        <ul>
          {siteData.header.navbar &&
            siteData.header.navbar.map((navLink, index) => (
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
