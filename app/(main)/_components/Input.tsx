"use client"
import { cn } from "@/lib/utils";
import React, { Component, ComponentPropsWithRef, useMemo, useRef, useState } from "react"
import { Mouse } from "lucide-react";
import useTypingGame, {
    CharStateType,
    PhaseType
} from "react-typing-game-hook";

type TypingInputProps = {
    text: string;
    time: string;
 } & ComponentPropsWithRef<'input'>


const MonkeyTyperInput = React.forwardRef<HTMLInputElement, TypingInputProps>(
    ({text, time}, ref) => {
        const [inputSentences, setInputSentences] = useState(() => '');
        const [margin, setMargin] = useState(() => 0);
    
        // what's the purpose of this letterElements ? 
        // thoughts: it's because of the pointer ? 
        const letterElements = useRef<HTMLDivElement>(null);
    
        // important shit 
        const [isFocused, setIsFocused] = useState(() => false)
    
        const {
            states: {
                charsState,
                length,
                currIndex,
                currChar,
                correctChar,
                errorChar,
                phase,
                startTime,
                endTime
            },
            actions: { insertTyping, resetTyping, deleteTyping }
        } = useTypingGame(text);
    
    
        const handleKey = (key: any) => {
            if (key === "Escape") {
                resetTyping();
                console.log("reset");
                return;
            }
            if (key === "Backspace") {
                deleteTyping(false);
                return;
            }
            if (key.length === 1) {
                insertTyping(key);
                console.log("insert");
                {/* it just fucking invisible lmaooo that's why we need to focus on the element crazy */ }
            }
        };
    
        const pos = useMemo(() => {
            if (currIndex !== -1 && letterElements.current) {
                const spanref: any = letterElements.current.children[currIndex];
                const left = spanref.offsetLeft + spanref.offsetWidth - 2;
                const top = spanref.offsetTop - 2;
                if (top > 60) {
                    setMargin((margin) => margin + 1);
                    return {
                        left,
                        top: top / 2,
                    };
                }
                return { left, top };
            } else {
                return {
                    left: -2,
                    top: 2,
                };
            }
        }, [currIndex]);
    
    
        const handleKeyDown = (letter: string) => {
            if (letter === 'Backspace') {
                //   const spanref: any = letterElements?.current?.children[currIndex];
                //   const top = spanref?.offsetTop - 2;
    
                //   if (top < 0) {
                //     return;
                //   }
                deleteTyping(false)
                return
            } else if (letter.length === 1) {
                insertTyping(letter)
                return
            }
        };
    
    
        return (
            <div className="relative w-full max-w-[1280px]">
                <div className="pb-3">
                    <span className="text-2xl text-red-500"> 15  </span>
                </div>
                {/* if text box is clicked focus on the input */}
                <div className="relative z-40 h-[140px] w-full text-3xl outline-none"
                    onClick={() => {
                        if (ref != null && typeof ref !== 'function') {
                            ref?.current?.focus();
                          }
                          setIsFocused(true);
                    }}>
                    <input
                        type='text'
                        className='absolute left-0 top-0 z-20 h-full w-full cursor-default opacity-0'
                        tabIndex={1}
                        ref={ref}
                        value={inputSentences}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => {
                            const currentNewVal = e.target.value
                            setInputSentences(currentNewVal)
                            if (currentNewVal.length < inputSentences.length) {
                                handleKeyDown("Backspace");
                            } else {
                                const char = currentNewVal.slice(-1);
                                if (char) {
                                    handleKeyDown(char);
                                }
                            }
                        }}
                    />
                    <div
                        className={cn(
                            'absolute -top-4 z-10 h-4 w-full bg-gradient-to-b transition-all duration-200',
                            { 'opacity-0': !isFocused }
                        )}
                    ></div>
                    <div
                        className={cn(
                            'absolute -bottom-1 z-10 h-8 w-full bg-gradient-to-t from-bg transition-all duration-200',
                            { 'opacity-0': !isFocused }
                        )}
                    ></div>
                    <span
                        className={cn(
                            'absolute z-20 flex h-full w-full cursor-default items-center justify-center text-base opacity-0 transition-all duration-200',
                            { 'text-zinc-100 opacity-100 ': !isFocused }
                        )}
                    >
                        Click
                        <Mouse className='mx-2 scale-x-[-1] text-[#dd7878]' />
                        or press any key to focus
                    </span>
    
                    {/* blur kind of stuff is here */}
                    <div className={cn("absolute top-0 left-0 mb-4 h-full w-full overflow-hidden text-justify leading-relaxed tracking-tighter transition-all duration-200", { "opacity-40 blur-sm": !isFocused })}>
                        <div ref={letterElements}
                            style={
                                margin > 0
                                    ? {
                                        marginTop: -(margin * 39),
                                    }
                                    : {
                                        marginTop: 0,
                                    }
                            }>
                            {text.split("").map((char: string, index: number) => {
                                let state = charsState[index];
                                let color =
                                    state === CharStateType.Incomplete
                                        ? "text-zinc-500"
                                        : state === CharStateType.Correct
                                            ? "text-amber-50"
                                            : "text-[#e64553] border-b-2 border-[#d20f39]";
                                return (
                                    <span
                                        key={char + index}
                                        className={`${color} ${state === 0 &&
                                            index < currIndex &&
                                            'border-b-2 border-[#d20f39]'
                                            }`}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)

MonkeyTyperInput.displayName = "MonkeyTyperInput"

export default MonkeyTyperInput