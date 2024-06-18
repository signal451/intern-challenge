"use client"
import React, {useEffect, useRef, useState } from "react"
import useTypingGame, { CharStateType } from "react-typing-game-hook";
import { Mouse } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTyperacerState } from "@/lib/hooks/useData";


const MonkeyTyperInput =  React.forwardRef<HTMLInputElement>(
    ({}, ref) => {
    // load data
    const {quotes, time} = useTyperacerState((state) => state)

    const [inputSentences, setInputSentences] = useState(() => '')
    const letterElements = useRef<HTMLDivElement>(null)
    const [isFocused, setIsFocused] = useState(() => true)
    const [margin, setMargin] = useState(() => 0)
    //time (hard coded)
    const [timeLeft, setTimeLeft] = useState(() => parseInt("15"))
    //wpm 
    const [userWpm, setUserWpm] = useState(() => 0)

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
        actions: { insertTyping, resetTyping, deleteTyping, endTyping }
    } = useTypingGame(quotes.content);

    useEffect(() => {
        if (currIndex !== -1 && letterElements.current) {
            const spanref: any = letterElements.current.children[currIndex];
            const top = spanref.offsetTop - 2;
            if (top > 60) {
                setMargin(margin => margin + 1)
            }
        }
    }, [currIndex]);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (startTime) {
                setTimeLeft((timeLeft) => {
                    if (timeLeft === 1) {
                        clearInterval(timerInterval);
                        endTyping();
                    }
                    return parseInt(time) - Math.floor((Date.now() - startTime) / 1000);
                });
            }
        }, 1000);
        if (phase === 2) {
            clearInterval(timerInterval);
        }

        return () => clearInterval(timerInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startTime, phase]);

    useEffect(() => {
        if (phase === 1 && startTime) {
            const passedTime = parseInt(time) - timeLeft
            if (passedTime > 0) {
                const wpm = Math.round((correctChar / 5) / (passedTime / 60))
                setUserWpm(wpm)
            }
            else {
                setUserWpm(0)
            }

        }
    }, [correctChar, startTime, time, timeLeft, phase])

    const handleKeyPress = (letter: string) => {
        if (letter === 'Backspace') {
            deleteTyping(false)
            return
        } else if (letter.length === 1) {
            insertTyping(letter)
            return
        }
    };

    useEffect(() => {
        setUserWpm(0)
        setMargin(0)
        setTimeLeft(parseInt(time))
        endTyping()
        resetTyping()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [quotes.content, time]);

    return (
        <div className="relative w-full px-5">
            <div className="pb-3 px-2">
                <span className="text-xl text-red-500"> {timeLeft} </span>
                <span className="text-xl text-red-500 pl-3"> {userWpm} wpm </span>
            </div>
            {/* if text box is clicked focus on the input */}
            <div className="relative z-40 h-[130px] w-full text-2xl outline-none"
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
                            handleKeyPress("Backspace");
                        } else {
                            const char = currentNewVal.slice(-1);
                            if (char) {
                                handleKeyPress(char);
                            }
                        }
                    }}
                    autoFocus
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
                    <Mouse className='mx-2 scale-x-[-1] text-[#dd7878] animate-bounce' />
                    here to focus
                </span>

                <div className={cn("absolute top-0 left-0 mb-4 h-full w-full overflow-hidden text-justify leading-relaxed tracking-tighter transition-all duration-200 px-2", { "opacity-40 blur-sm": !isFocused })}>
                    <div ref={letterElements} style={{ marginTop: -margin * 20 }}>
                        {quotes.content.split("").map((char: string, index: number) => {
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
                                    {index === currIndex && (
                                        <span className="inline-block bg-[#e64553] w-0.5 h-6 animate-pulse duration-1000 ml-0.5"></span>
                                    )}
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
