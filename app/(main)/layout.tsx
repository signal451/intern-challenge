import React, { ReactNode } from "react"
import Header from "../_componens/Header"

const monkeyLayout = ({children} : {children : ReactNode}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-col flex-grow max-w-screen-xl mx-auto w-full">
                {children}
            </main>
        </div>
    )
}

export default monkeyLayout