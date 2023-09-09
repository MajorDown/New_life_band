"use client";
import "@/styles/globals.css";
import webSiteData from "@/majorDB/webSite/website.DB.json";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import { createContext } from "react";

export const WebSiteContext = createContext();

export default function RootLayout({ children }) {
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
        <WebSiteContext.Provider value={webSiteData}>
          <Header />
          <main>{children}</main>
          <Footer />
        </WebSiteContext.Provider>
      </body>
    </html>
  );
}
