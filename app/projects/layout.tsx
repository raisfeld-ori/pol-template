"use client"
import { usePathname, useRouter } from 'next/navigation';
import './layout.css';
import { useEffect, useState } from "react";

function timeout(delay: number) {
  return new Promise( res => setTimeout(res, delay) );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [left_menu, set_left_menu] = useState(false);
  const [right_menu, set_right_menu] = useState(false);
  const [opacity, set_opcacity] = useState(1);
  const transition = 1000;
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {set_opcacity(1);}, [pathname])
  const SwitchPage = async (location: string) => {
    set_left_menu(false);
    set_right_menu(false);
    set_opcacity(0);
    await timeout(transition);
    router.replace(location);
    //@ts-expect-error
    router.push(location, undefined, { shallow: true });
    router.refresh();
    if (pathname == location){set_opcacity(1);}
  }
  return (
    <html lang="en">
      <body>
        <nav className="pages">
          <div className="left page" onMouseLeave={() => set_left_menu(false)}>
            <button className="button-9 page drop"
            onClick={() => set_left_menu(!left_menu)}
            onMouseEnter={() => set_left_menu(true)}
            >First year<br />⌄</button>
              <ul className="dropdown" style={{display: left_menu ? "inherit" : "none"}}>
              <li className="option" onClick={async () => SwitchPage('/projects/first_year/fall')}>Mini Project</li>
              <li className="option" onClick={async () => SwitchPage('/projects/first_year/autumn')}>Autumn Project</li>
              <li className="option" onClick={async () => SwitchPage('/projects/first_year/winter')}>Winter Project</li>
              <li className="option" onClick={async () => SwitchPage('/projects/first_year/spring')}>Spring Project</li>
              <li className="option" onClick={async () => SwitchPage('/projects/first_year/summer')}>Summer Project</li>
            </ul>
          </div>
          <div className="middle page">
            <button className="button-9 page no-drop" onClick={async () => SwitchPage('/projects/about')}>About me</button>
          </div>
            <div className="right page" onMouseLeave={() => set_right_menu(false)}>
              <button className="button-9 page drop"
              onMouseEnter={() => set_right_menu(true)}
              onClick={() => set_right_menu(!right_menu)}
              >Second year<br />⌄</button>
              <ul className="dropdown" style={{display: right_menu ? "inherit" : "none"}}>
              <li className="option" onClick={async () => SwitchPage('/projects/second_year/fall')}>Mini Project</li>
              <li className="option" onClick={async () => SwitchPage('/projects/second_year/winter')}>Winter Project</li>
              <li className="option" onClick={async () => SwitchPage('/projects/second_year/autumn')}>autumn Project</li>
              <li className="option" onClick={async () => SwitchPage('/projects/second_year/spring')}>Spring Project</li>
              <li className="option" onClick={async () => SwitchPage('/projects/second_year/summer')}>Summer Project</li>
              </ul>
            </div>
        </nav>
        <div className='child-container' style={{opacity, transition: transition + "ms"}}>
        {children}
        </div>
      </body>
    </html>
  );
}
