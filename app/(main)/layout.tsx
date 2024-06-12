import React, { ReactNode } from "react"
import Header from "../_componens/Header"

const monkeyLayout = ({children} : {children : ReactNode}) => {
    return (
        <div>
            <Header/>
            <main className="max-w-screen-xl m-auto w-full">
                {children}
            </main>
        </div>
    )
}

export default monkeyLayout