import Link from "next/link";

export default function socials(){
  
  return <div className="container">
    <h1 className="head">About me</h1>
    <p className="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      voluptas quae quasi amet dolorum aliquid minus quaerat error 
      similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      voluptas quae quasi amet dolorum aliquid minus quaerat error 
      similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
    </p>
    <ul className="links">
      <li className="link"><Link href={"#"}>my social #1</Link></li>
      <li className="link"><Link href={"#"}>my social #2</Link></li>
      <li className="link"><Link href={"#"}>my social #3</Link></li>
    </ul>
    </div>
}