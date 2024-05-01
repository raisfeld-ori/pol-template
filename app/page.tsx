import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={'/projects/socials'} style={{cursor: 'auto'}}>
      <h1 className="header">FullName's</h1>
      <h1 className="header2">Portfilio</h1>
      <p className="clicktomain">Click Anywhere to begin!</p>
      </Link>
      <footer className="footer1">Made by <span className="ftspn">Ariel Elkaslasi</span>, <span className="ftspn">Ori Risfeld</span>. </footer>
    </main>
  );
}
