"use client"
import React, { useRef, useState } from "react"
import useTypingGame, {
    CharStateType,
    PhaseType
} from "react-typing-game-hook";


const MonkeyTyperInput = () => {
    let text = "It was thought advisable for me to have my examinations in a room by myself, because the noise of the typewriter might disturb the other girls. It was thought advisable for me to have my examinations in a room by myself, because the noise of the typewriter might disturb the other girls"

    const [inputSentences, setInputSentences] = useState(() => '');

    // what's the purpose of this letterElements ? 
    // thoughts: it's because of the pointer ? 
    const letterElements = useRef<HTMLDivElement>(null);

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
            {/* it just fucking invisible lmaooo that's why we need to focus on the element crazy */}
        }
    };

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
            <div className="relative z-40 h-[140px] w-full text-2xl outline-none">
                <input
                    type='text'
                    className='absolute left-0 top-0 z-20 h-full w-full cursor-default opacity-0'
                    tabIndex={1}
                    value={inputSentences}
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

                {/* blur kind of stuff is here */}
                <div className="absolute top-0 left-0 mb-4 h-full w-full overflow-hidden text-justify leading-relaxed tracking-wide transition-all duration-200">
                <div className="" ref={letterElements}>
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

export default MonkeyTyperInput