"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './layout.css';
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [left_menu, set_left_menu] = useState(false);
  const [right_menu, set_right_menu] = useState(false);
  return (
    <html lang="en">
      <body>
        <nav className="pages">
          <div className="left page">
            <button className="button-9 page dropdown"
            onClick={() => set_left_menu(!left_menu)}
            >First year<br />⌄</button>
            <ul className="menu" style={{display: left_menu ? "inherit" : "none"}}>
              <li>aaba</li>
            </ul>
          </div>
          <div className="middle page">
            <button className="button-9 page">About me</button>
          </div>
            <div className="right page">
              <button className="button-9 page dropdown"
              onClick={() => set_right_menu(!right_menu)}
              >Second year<br />⌄</button>
              <ul className="menu"  style={{display: right_menu ? "inherit" : "none"}}>
                <li>aaba</li>
              </ul>
            </div>
        </nav>
        {children}
        <h1>test</h1>
      </body>
    </html>
  );
}
