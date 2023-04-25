import React from "react";

export const Switch = () => {
    return <label className="relative inline-block w-[60px] h-[34px]">
        <input type={"checkbox"} className="opacity-0 w-0 h-0 checked:translate-y-6" />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] before:absolute
                before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-white before:translate-y-6"/>
    </label>
}
