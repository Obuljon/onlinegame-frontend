import React from "react"
import { ReactComponent as Sad } from "../../assets/images/svgs/sad.svg"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { getWhite } from "../../features/whitefog/whitefogSlice"
import { restartRobotvsPlayer } from "../../features/robotplaye/robotvsplayeSlice"
import { useNavigate } from "react-router-dom"
import { setGameOverStyle } from "../../features/gameover/gameoverSlice"
export default function RBGameOver() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { style } = useSelector(
        (state: RootState) => state.gameover,
    )

    const onclick = () => {
        dispatch(getWhite("white_fog_hidden"))
        dispatch(setGameOverStyle("view_drop_hidden"))
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
        <div
            className={`w-[279px] h-[260px] bg-violet-800  rounded-2xl fixed flex flex-col justify-around items-center z-10 ${style}`}
        >
            <h1 className='text-red-800 text-4xl font-bold'>
                Game over
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
