"use client";
import "@/styles/globals.css";
import webSiteData from "@/majorDB/webSite/website.DB.json";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import { createContext } from "react";
import UserAccess from "@/components/UserAccess";
import useLocalStorage from "@/hooks/useLocalStorage";

export const UserContext = createContext();
export const WebSiteContext = createContext();

export default function RootLayout({ children }) {
  const userId = useLocalStorage("newlife_userId");

  return (
    <html lang="fr">
      <head>
        <title>New Life Band</title>
        <meta
          name="description"
          content="Site officiel du groupe de blues rock originaire de Vendée, New Life"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Orbitron&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <UserContext.Provider value={userId}>
          <WebSiteContext.Provider value={webSiteData}>
            <UserAccess />
            <Header />
            <main>{children}</main>
            <Footer />
          </WebSiteContext.Provider>
        </UserContext.Provider>
      </body>
    </html>
  );
}
