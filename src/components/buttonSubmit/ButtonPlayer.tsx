import React, { useEffect, useState } from "react"
import { ReactComponent as OOO } from "../../assets/images/svgs/OOO.svg"
import { ReactComponent as XXX } from "../../assets/images/svgs/xxxx.svg"
import { socket } from "../../socket"
import { useDispatch, useSelector } from "react-redux"
import { setGamePlaye } from "../../features/gameplaye/gameSlice"
import { RootState } from "../../utils/store"

interface ButtonClickProps {
    item: string
    index: number
}

const ButtonPlayer: React.FC<ButtonClickProps> = ({
    item,
    index,
}) => {
    const io = socket

    const { value } = useSelector(
        (state: RootState) => state.gameplaye,
    )

    const playerposetion = useSelector(
        (state: RootState) => state.player,
    )
    const [logo, setLogo] = useState(item)

    const [defaultclass, setClass] = useState("bg-white")

    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        setLogo(value[index])
        if (value[index] !== "*") {
            setClass("bg-lime-500")
        } else {
            setClass("bg-white")
        }
    }, [value[index]])

    const classnametitle = `w-[71px] h-[71px] rounded-2xl flex justify-center items-center ${defaultclass}`

    const onclick = () => {
        setLogo(playerposetion.gameposition)
        setClass("bg-lime-500")
        setIsDisabled(true)
        io.emit("live-game", index)
    }

    return (
        <button
            onClick={onclick}
            className={classnametitle}
            disabled={
                isDisabled || logo == "*" ? false : true
            }
        >
            {logo == "0" && <OOO />}
            {logo == "x" && <XXX />}
        </button>
    )
}
export default ButtonPlayer
