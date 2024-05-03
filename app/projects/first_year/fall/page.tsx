import example from './example_img.jpg';
import Image from "next/image"
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
  </div>
  </div>
}