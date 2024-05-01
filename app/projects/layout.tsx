import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './layout.css';
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
        <nav className="pages">
            <button className="dropdown">First year</button>
            <button className="dropdown">About me</button>
            <button className="dropdown">Second year</button>
        </nav>
        {children}
      </body>
    </html>
  );
}
