"use client"
import React from "react"
import MonkeyTyperInput from "./Input"
import { RotateCw } from "lucide-react"

const TypeSectionBox = () => {
    let temp = "When she didn't like a guy who was trying to pick her up, she started using sign language."
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
    return (
        <>
        <MonkeyTyperInput ref={inputRef} text={temp} time={"15"}/>
        <div className="flex items-center justify-center pt-10 sm:mt-0"> 
        <RotateCw className="text-zinc-400 hover:text-[#e64553]"/>
        </div>
        </>
    )
}

export default TypeSectionBox