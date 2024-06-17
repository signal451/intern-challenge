import { create } from "zustand"

type DataProps = {
    _id: string,
    content: string,
    author: string,
    tags: string,
    length: number
}

type TyperacerState = {
    quotes: DataProps,
    time: string,
    setText: (text: DataProps) => void
    setTime: (time: string) => void
}

const initialQuote :DataProps = {
    _id: "",
    content: "",
    author: "",
    tags: "",
    length: 0
}

export const useTyperacerState = create<TyperacerState>()((set) => ({
    quotes: initialQuote,
    time: "15",
    setText: (text) => set(() => ({ quotes: text })),
    setTime: (time) => set(() => ({ time }))
}))

export type {DataProps}







