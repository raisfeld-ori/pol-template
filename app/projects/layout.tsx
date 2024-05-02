"use client"
import { useRouter } from 'next/navigation';
import './layout.css';
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [left_menu, set_left_menu] = useState(false);
  const [right_menu, set_right_menu] = useState(false);
  const router = useRouter();
  const SwitchPage = (location: string) => {

    router.replace(location);
  }
  return (
    <html lang="en">
      <body>
        <nav className="pages">
          <div className="left page">
            <button className="button-9 page drop"
            onClick={() => set_left_menu(!left_menu)}
            >First year<br />⌄</button>
            <ul className="dropdown" style={{transform: left_menu ? "translate(0, 0)" : "translate(0, -50vh)"}}>
              <li className="option" onClick={() => SwitchPage('/projects/first_year/fall')}>fall</li>
            </ul>
          </div>
          <div className="middle page">
            <button className="button-9 page" onClick={() => SwitchPage('/projects/about')}>About me</button>
          </div>
            <div className="right page">
              <button className="button-9 page drop"
              onClick={() => set_right_menu(!right_menu)}
              >Second year<br />⌄</button>
              <ul className="dropdown" style={{transform: right_menu ? "translate(0, 0)" : "translate(0, -50vh)"}}>
                <li className="option">not ready yet</li>
              </ul>
            </div>
        </nav>
        <div className='child-container'>
        {children}
        </div>
      </body>
    </html>
  );
}
