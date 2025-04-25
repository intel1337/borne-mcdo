'use client'

import Image from 'next/image'
import { useState } from 'react/';


export default function Landing(){
  const [choice, setChoice] = useState("");
  function saveState(data){
    setChoice(data)
    console.log(data)
    localStorage.setItem("data", data);
  }
  return(
    <div className="landing">
      <div className="hero">
        <h1 id="greeting">Welcome to <span>M</span>cDonald's</h1>
        <Image
        src="https://logodownload.org/wp-content/uploads/2014/04/mcdonalds-logo-3-1.png"
        width="200"
        height="180"
        alt="logo"


         />
        <h2>Order for :</h2>
        <button onClick={()=>saveState("takeaway")}>  <a href="/order">📦 Take Away</a></button>
        <button onClick={()=>saveState("dinein")}><a href="/order">🍴Dine In</a></button>



      </div>

    </div>
  )
}