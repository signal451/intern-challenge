"use client"
import { useEffect, useRef } from "react"
import { DataProps, useTyperacerState } from "../hooks/useData"


const InitQuotes = ({quotes} : {quotes: DataProps}) => {
    const initState = useRef(false)

    useEffect(() => {
        if(!initState.current) {
            useTyperacerState.setState({quotes})
        }
          // eslint-disable-next-line
    }, [])

    return (
        <></>
    )
}

export default InitQuotes