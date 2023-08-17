import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
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
        <h1>Site Officiel du groupe de blues rock</h1>
      </div>
      <nav>
        <ul>
          <li id="linkToMedias">
            <Link href="/medias">Medias</Link>
          </li>
          <li id="linkToDates">
            <Link href="/dates">Dates</Link>
          </li>
          <li id="linkToBio">
            <Link href="/bio">Bio</Link>
          </li>
          <li id="linkToNews">
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
      <div id="headerUnderline"></div>
    </header>
  );
};

export default Header;
