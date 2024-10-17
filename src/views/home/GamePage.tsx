import * as React from "react"
import { ReactComponent as OOO } from "../../assets/images/svgs/OOO.svg"
import { ReactComponent as XXX } from "../../assets/images/svgs/xxxx.svg"

import {
    ButtonPlayer,
    Drow,
    GameOver,
    TimeEnd,
    Wait,
    Winner,
} from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { useNavigate } from "react-router-dom"
import getUsername from "../../sevices/myname/myname"

function GamePage() {
    const navigate = useNavigate()
    const { white_fog } = useSelector(
        (state: RootState) => state.whitefog,
    )

    const { value } = useSelector(
        (state: RootState) => state.gameplaye,
    )

    const { gameposition } = useSelector(
        (state: RootState) => state.player,
    )

    const { email, username } = useSelector(
        (state: RootState) => state.user,
    )

    const enemy = useSelector(
        (state: RootState) => state.enemy,
    )

    const [{ playerX, player0 }, setPlayer] =
        React.useState({
            playerX: "player One",
            player0: "player two",
        })

    React.useEffect(() => {
        if (gameposition == "x")
            setPlayer({
                playerX: username,
                player0: enemy.username,
            })

        if (gameposition == "0")
            setPlayer({
                playerX: enemy.username,
                player0: username,
            })
    }, [gameposition])

    return (
        <div className='flex justify-center '>
            <GameOver />
            <Drow />
            <Winner />
            <Wait />
            <div
                className={`w-[360px] h-[600px] rounded-lg bg-violet-600 flex justify-around items-center flex-col ${white_fog}`}
            >
                <div className='w-[280px] flex justify-between items-center gap-8 mt-[44px] mx-[29px]'>
                    <div className='w-[94px] h-[92px] rounded-2xl bg-indigo-800 flex flex-col justify-center items-center'>
                        <h1 className='text-white font-normal text-xs'>
                            {playerX}
                        </h1>
                        <XXX />
                    </div>

                    <div className='flex justify-center gap-4'>
                        <TimeEnd />
                        {/* <h1 className='text-white'>0</h1>{" "}
                        <h1 className='text-white'>:</h1>{" "}
                        <h1 className='text-white'>0</h1> */}
                    </div>

                    <div className='w-[94px] h-[92px] rounded-2xl bg-indigo-800 flex flex-col justify-center items-center'>
                        <h1 className='text-white font-normal text-xs'>
                            {player0}
                        </h1>
                        <OOO />
                    </div>
                </div>

                <div className='w-[280px] h-[315px] rounded-2xl bg-indigo-800 flex flex-wrap justify-center items-center gap-x-8'>
                    {value.split("").map((item, index) => (
                        <ButtonPlayer
                            key={index}
                            item={item}
                            index={index}
                        />
                    ))}
                    {/*<button className='w-[71px] h-[71px] rounded-2xl bg-white'></button>
                    <button className='w-[71px] h-[71px] rounded-2xl bg-lime-500'></button> */}
                </div>
            </div>
        </div>
    )
}

export default GamePage
