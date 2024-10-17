import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as Draw } from "../../assets/images/svgs/draw.svg"

import { RootState } from "../../utils/store"
import { getWhite } from "../../features/whitefog/whitefogSlice"
import { setDraw } from "../../features/drow/drawSlice"
import {
    restartRobotvsPlayer,
    setRobotGamePlaye,
} from "../../features/robotplaye/robotvsplayeSlice"
import { useNavigate } from "react-router-dom"

export default function RBDraw() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { style } = useSelector(
        (state: RootState) => state.draw,
    )

    const onclick = () => {
        dispatch(getWhite("white_fog_hidden"))
        dispatch(setDraw("view_drop_hidden"))
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
