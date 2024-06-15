import React, {ReactNode} from "react"

const Kbd = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={`flex items-center rounded-sm  border-font bg-neutral-800 px-1 text-sm`}>
            {children}
        </div>
    )
}

export default Kbd