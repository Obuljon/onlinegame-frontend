import * as React from "react"
import { ReactComponent as Trophy } from "../../assets/images/svgs/trophy.svg"
import { socket } from "../../socket"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { getWhite } from "../../features/whitefog/whitefogSlice"
import { setWinnerStyle } from "../../features/winner/winnerSlice"
import {
    Link,
    redirect,
    useNavigate,
} from "react-router-dom"
import {
    restartGamePlaye,
    setGamePlaye,
} from "../../features/gameplaye/gameSlice"
import { getDrop } from "../../features/backdrop/waitSlice"
import { resetTime } from "../../features/endtime/endtimeSlice"

export default function Winner() {
    const io = socket
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { style } = useSelector(
        (state: RootState) => state.winner,
    )

    const { value } = useSelector(
        (state: RootState) => state.gameplaye,
    )

    const [message, setMessage] = React.useState("")

    io.on("winner", ({ message, gameplaye }) => {
        dispatch(resetTime())
        dispatch(setGamePlaye(gameplaye))
        setMessage(message)
        dispatch(getWhite("white_fog"))
        setTimeout(() => {
            dispatch(setWinnerStyle("view_drop"))
        }, 3000)
    })

    const classStyle =
        "w-[279px] h-[260px] bg-violet-900 rounded-2xl fixed flex flex-col justify-around items-center " +
        style

    const delhistory = () => {
        dispatch(getWhite("white_fog"))
        dispatch(setWinnerStyle("view_drop_hidden"))
        dispatch(restartGamePlaye())
    }

    const onclickBack = () => {
        delhistory()
        navigate("/")
    }

    const onclickPlaye = () => {
        dispatch(setWinnerStyle("view_drop_hidden"))
        dispatch(restartGamePlaye())
        io.emit("playe-game", { message: "ok" })
        dispatch(getDrop("view_drop"))
        dispatch(getWhite("white_fog"))
    }
    return (
        <div className={classStyle}>
            <h1 className='text-3xl font-bold text-amber-400'>
                {message}
            </h1>
            <div>
                <Trophy />
            </div>
            <div className='flex justify-around items-center gap-6'>
                <button
                    onClick={onclickBack}
                    className='w-[79px] h-8 bg-amber-400 rounded-2xl'
                >
                    Back
                </button>
                <button
                    onClick={onclickPlaye}
                    className='w-[79px] h-8 bg-amber-400 rounded-2xl'
                >
                    Play Again
                </button>
            </div>
        </div>
    )
}
