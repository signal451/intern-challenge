"use client"
import React from "react"
import MonkeyTyperInput from "./Input"
import { RotateCw } from "lucide-react"

const TypeSectionBox = () => {
    let temp = "The newly planted trees were held up by wooden frames in hopes they could survive the next storm. The newly planted trees were held up by wooden frames in hopes they could survive the next storm. The newly planted trees were held up by wooden frames in hopes they could survive the next storm."

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