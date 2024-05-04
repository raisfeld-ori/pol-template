'use client'
import { useState } from "react";
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
    router.push('/projects/about');
  }
  return (
    <main>
      <div 
      style={{transition: transition + "ms", opacity: opacity.toString()}}
      onClick={next_page}>


        <h1 className="header">Yournames</h1>
        <h1 className="header2">Portfilio</h1>

    <div className="sp-container">
      <div className="sp-content">
        <div className="sp-globe"></div>
        <h2 className="frame-1">Talent #1</h2>
        <h2 className="frame-2">Talent #2</h2>
        <h2 className="frame-3">Talent #3</h2>
        <h2 className="frame-4">Talent #4</h2>
        <h2 className="frame-5">

          
          <span>Erm,</span>
          <span> What the,</span>
          <span> Sigma.</span>
        </h2>
      </div>
    </div>
    <div className="animation-container">
      <div className="lightning-container">
        <div className="lightning white"></div>
        <div className="lightning red"></div>
      </div>
      <div className="boom-container">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape triangle big yellow"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
      <div className="boom-container second">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
    </div>
        <p className="clicktomain">Click Anywhere to begin!</p>
      </div>
    </main>
  );
}
