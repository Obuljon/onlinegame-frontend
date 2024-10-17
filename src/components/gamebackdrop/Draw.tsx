import * as React from "react"
import { ReactComponent as Draw } from "../../assets/images/svgs/draw.svg"
import { socket } from "../../socket"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { setDraw } from "../../features/drow/drawSlice"
import { getWhite } from "../../features/whitefog/whitefogSlice"
import { useNavigate } from "react-router-dom"
import {
    restartGamePlaye,
    setGamePlaye,
} from "../../features/gameplaye/gameSlice"
import { getDrop } from "../../features/backdrop/waitSlice"
import { resetTime } from "../../features/endtime/endtimeSlice"
import { clearEnemy } from "../../features/enemy/enemySlice"
export default function Drow() {
    const io = socket
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { style } = useSelector(
        (state: RootState) => state.draw,
    )

    const { value } = useSelector(
        (state: RootState) => state.gameplaye,
    )

    const { email, username } = useSelector(
        (state: RootState) => state.user,
    )

    io.on("drow", ({ gameplaye }) => {
        dispatch(resetTime())
        dispatch(setGamePlaye(gameplaye))
        dispatch(getWhite("white_fog"))

        setTimeout(() => {
            dispatch(setDraw("top-1/4"))
        }, 1000)
    })

    const onclickBack = () => {
        dispatch(clearEnemy())

        dispatch(getWhite("white_fog_hidden"))
        dispatch(setDraw("view_drop_hidden"))
        dispatch(restartGamePlaye())
        navigate("/")
    }

    const onclickPlaye = () => {
        dispatch(clearEnemy())
        dispatch(restartGamePlaye())
        dispatch(getWhite("white_fog"))
        dispatch(setDraw("view_drop_hidden"))
        dispatch(getDrop("view_drop"))
        io.emit("playe-game", { email, username })
    }

    return (
        <div
            className={
                "w-[279px] h-[260px] bg-violet-800 rounded-2xl fixed flex flex-col justify-around items-center z-10 " +
                style
            }
        >
            <h1 className='text-white font-bold text-4xl'>
                Draw
            </h1>
            <div className='w-[130px] h-[130px] flex justify-center items-center bg-sky-500 rounded-full'>
                <Draw />
            </div>

            <div className='flex justify-between items-center gap-6 my-4'>
                <button
                    onClick={onclickBack}
                    className='w-[72px] h-[26px] bg-sky-500 text-white rounded-3xl'
                >
                    Back
                </button>

                <button
                    onClick={onclickPlaye}
                    className='w-[72px] h-[26px] bg-sky-500 text-white rounded-3xl'
                >
                    Play again
                </button>
            </div>
        </div>
    )
}
