import React, { useState } from "react"
import { ReactComponent as OOO } from "../../assets/images/svgs/OOO.svg"
import { ReactComponent as XXX } from "../../assets/images/svgs/xxxx.svg"

interface buttonclick {
    item: string
    index: number
    classStyle: string
}

export default function ButtonClick({
    item,
    index,
    classStyle,
}: buttonclick) {
    console.log(item, index, classStyle)

    return (
        <div
            className={
                "w-[71px] h-[71px] rounded-2xl " +
                classStyle
            }
        >
            {item == "0" && <OOO />}
            {item == "x" && <XXX />}
        </div>
    )
}
