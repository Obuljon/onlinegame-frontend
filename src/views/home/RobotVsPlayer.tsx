import React, { useState } from "react"
import { ReactComponent as OOO } from "../../assets/images/svgs/OOO.svg"
import { ReactComponent as XXX } from "../../assets/images/svgs/xxxx.svg"
import makeMove from "../../utils/robot"
import {
    ButtonClick,
    ButtonRobotvsPlayer,
    RBDraw,
    RBGameOver,
} from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import RBWinnder from "../../components/robotgamebackdrop/RBWinnder"

export default function RobotVsPlayer() {
    const dispatch = useDispatch()
    const { value } = useSelector(
        (state: RootState) => state.robot,
    )

    const { white_fog } = useSelector(
        (state: RootState) => state.whitefog,
    )

    return (
        <div className='flex justify-center '>
            <RBDraw />
            <RBGameOver />
            <RBWinnder />

            <div
                className={`w-[360px] h-[600px] rounded-lg bg-violet-600 flex justify-around items-center flex-col ${white_fog}`}
            >
                <div className='w-[280px] flex justify-between items-center gap-8 mt-[44px] mx-[29px]'>
                    <div className='w-[94px] h-[92px] rounded-2xl bg-indigo-800 flex flex-col justify-center items-center'>
                        <h1 className='text-white font-normal text-xs'>
                            You
                        </h1>
                        <XXX />
                    </div>

                    <div className='flex justify-center gap-4'>
                        {/* <h1 className='text-white'>0</h1>{" "}
                        <h1 className='text-white'>:</h1>{" "}
                        <h1 className='text-white'>0</h1> */}
                    </div>

                    <div className='w-[94px] h-[92px] rounded-2xl bg-indigo-800 flex flex-col justify-center items-center'>
                        <h1 className='text-white font-normal text-xs'>
                            Robot
                        </h1>
                        <OOO />
                    </div>
                </div>

                <div className='w-[280px] h-[315px] rounded-2xl bg-indigo-800 flex flex-wrap justify-center items-center gap-x-8'>
                    {value.split("").map((item, index) => (
                        <ButtonRobotvsPlayer
                            key={index}
                            index={index}
                            item={item}
                        />
                    ))}
                    {/*<button className='w-[71px] h-[71px] rounded-2xl bg-white'></button>
                    <button className='w-[71px] h-[71px] rounded-2xl bg-lime-500'></button> */}
                </div>
            </div>
        </div>
    )
}
