"use client";
import "@/styles/globals.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import UserAccess from "../components/UserAccess";
import { UserProvider } from "../contexts/UserContext";
import { SiteDataProvider } from "../contexts/SiteDataContext";

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
        <UserProvider>
          <SiteDataProvider>
            <UserAccess />
            <Header />
            <main>{children}</main>
            <Footer />
          </SiteDataProvider>
        </UserProvider>
      </body>
    </html>
  );
}
