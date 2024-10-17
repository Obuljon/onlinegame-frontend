import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { useState } from "react"
import { getDrop } from "../../features/backdrop/waitSlice"
import { getWhite } from "../../features/whitefog/whitefogSlice"
import { socket } from "../../socket"
import { Link } from "react-router-dom"
import { wailresdata } from "../../dtos/sockettyps"
import Waittime from "./Waittime"
import { clearEnemy } from "../../features/enemy/enemySlice"

export default function Wait() {
    const io = socket
    const dispatch = useDispatch()
    const style = useSelector(
        (state: RootState) => state.wait.drop,
    )

    const [restitle, setresTitle] = useState("")

    io.on("player-wait", (data: wailresdata) => {
        setresTitle(data.message)
    })

    const leaveGame = () => {
        dispatch(getWhite("white_fog"))
        io.emit("leave-game")
    }

    const classStyle =
        "w-[279px] h-[260px] bg-violet-900 rounded-2xl fixed flex flex-col justify-around items-center"

    const [defstyle, setStyle] = useState("view_drop")

    return (
        <div className={classStyle + " " + style}>
            <h1 className='text-3xl font-bold text-amber-400'>
                {restitle}
            </h1>
            <Waittime />
            <div className='flex justify-around items-center gap-6'>
                <Link
                    to='/'
                    onClick={leaveGame}
                    className='w-[79px] h-8 bg-amber-400 rounded-2xl text-center'
                >
                    Back
                </Link>
            </div>
        </div>
    )
}
