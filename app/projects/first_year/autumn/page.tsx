import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";

export default function Page(){
  return <div className="container">
  <h1 className="head">Project name</h1>
  <p className="description">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
  voluptas quae quasi amet dolorum aliquid minus quaerat error 
  similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
  voluptas quae quasi amet dolorum aliquid minus quaerat error 
  similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>


    <ul className="linksprj">
  
  <li className="linkprj">
    <Link href={"#"}>LinkedIn</Link>
  </li>
  <li className="linkprj"><Link href={"#"}>Github</Link></li>
  <li className="linkprj"><Link href={"#"}>Facebook</Link></li>
</ul>
    


  </div>
  </div>
}