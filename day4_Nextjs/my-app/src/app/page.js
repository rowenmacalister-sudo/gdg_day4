"use client";
import {useState} from "react";
import Navbar from "@/components/Navbar";
import Buttonklik from "@/components/Button";

export default function Home() {
  const [count, SetCount] = useState(0);

  function handleClick() {
    SetCount(count + 1);
  }
  return (
/*     <>
    <Navbar/> */
    <div className="flex flex-col min-h-screen justify-center items-center">
      <p>anda sudah tekan {count}</p>
      <Buttonklik handle={handleClick}/>
      
    </div>
/*     </> */
  );
}
