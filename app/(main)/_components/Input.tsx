"use client"
import React, { useRef, useState } from "react"
import useTypingGame, {
    CharStateType,
    PhaseType
} from "react-typing-game-hook";


const MonkeyTyperInput = () => {
    let text = "The quick brown fox jumps over the lazy dog";
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
        }
    };


    return (
        <div className="relative w-full max-w-[1280px]">
            <div className="pb-3">
                <span className="text-2xl text-red-500">   </span>
            </div>
            {/* if text box is clicked focus on the input */}
            <div className="relative z-40 h-[140px] w-full text-2xl outline-none">
                {/* it just fucking invisible lmaooo that's why we need to focus on the element crazy */}

                {/* blur kind of stuff is here */}

                <div
                    className="typing-test"
                    onKeyDown={(e) => {
                        handleKey(e.key);
                        e.preventDefault();
                    }}
                    tabIndex={0}
                >
                    {text.split("").map((char: string, index: number) => {
                        let state = charsState[index];
                        let color =
                            state === CharStateType.Incomplete
                                ? "text-zinc-500"
                                : state === CharStateType.Correct
                                    ? "text-amber-200"
                                    : "text-zinc-500 border-b-2 border-red-600";
                        return (
                            <span
                                key={char + index}
                                className={`${color} ${state === 0 &&
                                    index < currIndex &&
                                    'border-b-2 border-red-600 text-zinc-500'
                                    }`}
                            >
                                {char}
                            </span>
                        );
                    })}
                </div>



            </div>
        </div>
    )
}

export default MonkeyTyperInput