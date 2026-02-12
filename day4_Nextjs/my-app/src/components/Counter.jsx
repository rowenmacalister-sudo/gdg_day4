"use client";
import { useState } from "react"
import ButtonKlik from "@/components/Button"

export default function Hitung({}) {
    const[hitung, setCount] = useState(0)
    
    function klikTombol() {
        setCount(hitung+1)
    }
    return (
        <>
            <p>anda mengklik sebanyak {hitung} kali</p>
            <ButtonKlik handle={klikTombol}/>
        </>
        
    )
}