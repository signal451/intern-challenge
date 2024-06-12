"use client"

import React, {} from "react"

type TypingInputProps = {
    text: string,
    time: string
} & React.ComponentPropsWithRef<'input'>


const MonkeyTyperInput = () => {
    return (
        <div className="relative w-full">
            <div className="pb-3">
                <span className="text-2xl text-red-500"> 15 </span>
            </div>
        <div className="text-3xl">
        It was thought advisable for me to have my examinations in a room by myself, because the noise of the typewriter might disturb the other girls
        </div>
        </div>
    )
}

export default MonkeyTyperInput