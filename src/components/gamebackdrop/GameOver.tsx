import * as React from "react"
import { ReactComponent as Sad } from "../../assets/images/svgs/sad.svg"
import { socket } from "../../socket"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { getWhite } from "../../features/whitefog/whitefogSlice"
import { setGameOverStyle } from "../../features/gameover/gameoverSlice"
import { redirect, useNavigate } from "react-router-dom"
import {
    restartGamePlaye,
    setGamePlaye,
} from "../../features/gameplaye/gameSlice"
import { getDrop } from "../../features/backdrop/waitSlice"
import { resetTime } from "../../features/endtime/endtimeSlice"
import {
    clearEnemy,
    setEnemy,
} from "../../features/enemy/enemySlice"

export default function GameOver() {
    const io = socket
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { style } = useSelector(
        (state: RootState) => state.gameover,
    )

    const { email, username } = useSelector(
        (state: RootState) => state.user,
    )

    const classStyle =
        "w-[279px] h-[260px] bg-violet-800  rounded-2xl fixed flex flex-col justify-around items-center z-10 " +
        style

    const [message, setMassage] =
        React.useState("You Lose!")

    io.on("game-over", ({ message, gameplaye }) => {
        dispatch(setGamePlaye(gameplaye))
        dispatch(getWhite("white_fog"))
        dispatch(resetTime())
        setMassage(message)
        setTimeout(() => {
            dispatch(setGameOverStyle("top-1/4"))
        }, 1000)
    })

    const delhistory = () => {
        dispatch(getWhite("white_fog"))
        dispatch(setGameOverStyle("view_drop_hidden"))
        dispatch(restartGamePlaye())
        dispatch(clearEnemy())
    }

    const onclickBack = () => {
        delhistory()
        navigate("/")
    }
    const onclickPlaye = () => {
        io.emit("playe-game", { email, username })
        dispatch(getDrop("view_drop"))
        delhistory()
    }
    return (
        <div className={classStyle}>
            <h1 className='text-red-800 text-4xl font-bold'>
                {message}
            </h1>
            <div>
                <Sad />
            </div>
            <div className='flex justify-between items-center gap-6'>
                <button
                    onClick={onclickBack}
                    className='w-[72px] h-[26px] text-white bg-red-800 rounded-3xl'
                >
                    Back
                </button>
                <button
                    onClick={onclickPlaye}
                    className='w-[72px] h-[26px] text-white bg-red-800 rounded-3xl'
                >
                    Play Again
                </button>
            </div>
        </div>
    )
}
