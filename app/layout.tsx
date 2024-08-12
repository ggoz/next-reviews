import "./globals.css";
import Link from "next/link";
import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";
import { exo2, orbition } from "./font";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer"
  }
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en' className={`${orbition.variable} ${exo2.variable}`}>
      <body className='bg-orange-50 flex flex-col px-4 py-2 min-h-screen'>
        <header>
          <NavBar></NavBar>
        </header>
        <main className='grow py-3'>{children}</main>
        <footer className='border-t py-3 text-center text-xs text-slate-500'>
          Game data and images courtesy of{" "}
          <a href='https://rawg.io/' target='_blank' className='text-orange-800 hover:underline'>
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
