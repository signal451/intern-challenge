import React, {ReactNode} from "react"

const Kbd = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={`flex items-center rounded-sm  border-font bg-[#7c7f93] px-1 text-xs text-zinc-800`}>
            {children}
        </div>
    )
}

export default Kbd