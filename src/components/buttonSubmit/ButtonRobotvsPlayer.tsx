import React, { useEffect, useState } from "react"

import { ReactComponent as OOO } from "../../assets/images/svgs/OOO.svg"
import { ReactComponent as XXX } from "../../assets/images/svgs/xxxx.svg"
import { useDispatch, useSelector } from "react-redux"
import { setRobotGamePlaye } from "../../features/robotplaye/robotvsplayeSlice"
import { RootState } from "../../utils/store"
import { setWinnerStyle } from "../../features/winner/winnerSlice"
import { setGameOverStyle } from "../../features/gameover/gameoverSlice"
import { setDraw } from "../../features/drow/drawSlice"
import { getWhite } from "../../features/whitefog/whitefogSlice"

interface buttontype {
    item: string
    index: number
}

export default function ButtonRobotvsPlayer({
    item,
    index,
}: buttontype) {
    const dispatch = useDispatch()

    const { value, winner } = useSelector(
        (state: RootState) => state.robot,
    )

    const [logo, setLogo] = useState(item)

    const [defaultclass, setClass] = useState("bg-white")

    const classnametitle = `w-[71px] h-[71px] rounded-2xl ${
        item != "*"
            ? " bg-lime-500 flex justify-center items-center"
            : defaultclass
    }`

    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        setLogo(value[index])

        if (!value.includes("*")) {
            dispatch(getWhite("white_fog"))
            dispatch(setDraw("view_drop"))
            setIsDisabled(false)
        }
    }, [value])

    useEffect(() => {
        setClass("bg-white")

        if (winner == "x") {
            dispatch(getWhite("white_fog"))
            dispatch(setWinnerStyle("view_drop"))
            setIsDisabled(false)
        }

        if (winner == "0") {
            dispatch(getWhite("white_fog"))
            dispatch(setGameOverStyle("view_drop"))
            setIsDisabled(false)
        }
    }, [winner])

    const onclick = () => {
        dispatch(
            setRobotGamePlaye(
                value.substring(0, index) +
                    "x" +
                    value.substring(index + 1),
            ),
        )
        setIsDisabled(true)
        setClass(
            "flex justify-center items-center bg-lime-500 ",
        )
    }

    return (
        <button
            onClick={onclick}
            className={classnametitle}
            disabled={isDisabled}
        >
            {logo == "0" && <OOO />}
            {logo == "x" && <XXX />}
        </button>
    )
}
