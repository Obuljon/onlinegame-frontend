import React from "react"
import { ReactComponent as Trophy } from "../../assets/images/svgs/trophy.svg"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { getWhite } from "../../features/whitefog/whitefogSlice"
import { restartRobotvsPlayer } from "../../features/robotplaye/robotvsplayeSlice"
import { setWinnerStyle } from "../../features/winner/winnerSlice"
import { useNavigate } from "react-router-dom"

export default function RBWinnder() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { style } = useSelector(
        (state: RootState) => state.winner,
    )

    const classStyle =
        "w-[279px] h-[260px] bg-violet-900 rounded-2xl fixed flex flex-col justify-around items-center " +
        style

    const onclick = () => {
        dispatch(getWhite("white_fog_hidden"))
        dispatch(setWinnerStyle("view_drop_hidden"))
        dispatch(restartRobotvsPlayer())
    }
    const onclickBack = () => {
        onclick()
        navigate("/")
    }
    const onclickPlaye = () => {
        onclick()
    }

    return (
        <div className={classStyle}>
            <h1 className='text-3xl font-bold text-amber-400'>
                Winner
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
