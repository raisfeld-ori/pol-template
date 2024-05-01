'use client'
import { useState } from "react";
import styles from "./page.module.css";
import './page.css';
import { useRouter } from "next/navigation";
function timeout(delay: number) {
  return new Promise( res => setTimeout(res, delay) );
}

export default function Home() {
  const [opacity, set_opacity] = useState(1);
  const router = useRouter();
  let transition = 1000;
  async function next_page(){
    set_opacity(0);
    await timeout(transition);
    router.replace('/projects/socials')
  }
  return (
    <main className={styles.main}>
      <div 
      style={{transition: transition + "ms", opacity: opacity.toString()}}
      onClick={next_page}>
        <h1 className="header">FullName's</h1>
        <h1 className="header2">Portfilio</h1>
        <p className="clicktomain">Click Anywhere to begin!</p>
      </div>
    </main>
  );
}
