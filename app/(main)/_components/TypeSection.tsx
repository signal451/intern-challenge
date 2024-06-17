"use client"
import * as React from 'react';
import { Button } from "@/components/ui/button"
import { useTyperacerState } from "@/lib/hooks/useData"
import { RotateCw } from "lucide-react"
import fetchData from "../_lib/data"
import MonkeyTyperInput from './Input';

const TypeSection = () => {

    const setTyperQuote = useTyperacerState((state) => state.setText)

    const handleRestart = async () => {
        const data  = await fetchData()
        setTyperQuote(data[0])
        inputRef.current.focus()
    }

    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
        <>
        <MonkeyTyperInput ref={inputRef} />
        <div className="flex items-center justify-center pt-10 sm:mt-5 md:pt-0"> 
        <Button variant={"ghost"} size={"icon"} className="hover:bg-transparent" onClick={handleRestart}>
            <RotateCw className="text-zinc-400 hover:text-[#e64553]"/>
        </Button>
        </div>
        </>
    )
}

export default TypeSection


