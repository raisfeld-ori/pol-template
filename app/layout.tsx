import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FullName's Portfilio",
  description: "Made by the chamama's Tech team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <h1 className="header">Full Name's</h1>
      <h1 className="header2">Portfilio</h1>


      <p className="clicktomain">Click Anywhere to begin!</p>
      <footer className="footer1">Made by <span className="ftspn">Ariel Elkaslasi</span>, <span className="ftspn">Ori Risfeld</span>. </footer>
      </body>

    </html>
  );
}
