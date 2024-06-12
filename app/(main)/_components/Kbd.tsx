import React, {ReactNode} from "react"

const Kbd = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={`flex items-center rounded-sm border-b-2 border-font bg-red-500 px-1 text-sm font-medium`}>
            {children}
        </div>
    )
}