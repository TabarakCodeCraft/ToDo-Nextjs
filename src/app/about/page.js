"use client";
import container from "../commponents/container/container"
import Header from "../commponents/header/header"
import Image from "next/image";

export default function About() {
  let id="about";
  return (
    <div>
  <Header id={id} />
    <container>
      <br/>
      <h1>Hello ✩</h1>
   <p>I'm Tabarak Code Craft..</p>
   <center>
    <Image src="./WelcomeReact.svg" height={600} width={600} style={{margin: "auto"}}/>
    <br/>
    <br/>
    <p>Created by ToTa 2023 Nov. 4</p>
  
    </center>
    <br/>
    </container>
    </div>
  )
}
