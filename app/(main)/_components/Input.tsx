"use client"
import React, { useRef, useState } from "react"
import useTypingGame, {
    CharStateType,
    PhaseType
} from "react-typing-game-hook";


const MonkeyTyperInput = () => {
    let text = "It was thought advisable for me to have my examinations in a room by myself, because the noise of the typewriter might disturb the other girls."

    const [inputSentences, setInputSentences] = useState(() => '');

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
                <span className="text-2xl text-red-500">   </span>
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

                <div className="">
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