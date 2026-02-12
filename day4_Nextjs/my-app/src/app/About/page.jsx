/* "use client";
import ButtonKlik from "@/components/button";
import {useState} from "react";

export default function AboutPage() {
    const[isClicked, setClicked] = useState(false);

    function clickbutton() {
        setClicked(true);
    }
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
              <p>loh {isClicked ? "anda sudah tekan" : "anda belum tekan"}</p>
              <ButtonKlik handle={clickbutton}/>
        </div>
    )
} */

/* sec 2 */
"use server"
import Hitung from "@/components/Counter"

export default async function AboutPage() {
    /* const res = await fetch("http://localhost:3000/api/halo")
    const data = await res.json()
    console.log("Data dari API route ", data) */

    return (
        <div className="flex bg-black flex-col min-h-screen justify-center items-center">
            <Hitung />
        </div>
    )
}
