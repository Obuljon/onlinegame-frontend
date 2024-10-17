import * as React from "react"
import {
    Link,
    redirect,
    useHref,
    useNavigate,
} from "react-router-dom"
import { socket } from "../../socket"

import { ReactComponent as Robot } from "../../assets/images/svgs/robot-02-icon1.svg"
import { ReactComponent as Pleyer } from "../../assets/images/svgs/play1.svg"
import { ReactComponent as Market } from "../../assets/images/svgs/store1.svg"
import { ReactComponent as Challenges } from "../../assets/images/svgs/HandsThrumpet.svg"
import { useDispatch, useSelector } from "react-redux"
import { getWhite } from "../../features/whitefog/whitefogSlice"
import { getDrop } from "../../features/backdrop/waitSlice"
import { RootState } from "../../utils/store"
import { setGameOverStyle } from "../../features/gameover/gameoverSlice"
import { setWinnerStyle } from "../../features/winner/winnerSlice"
import { setDraw } from "../../features/drow/drawSlice"
import getUsername from "../../sevices/myname/myname"
import { setUserData } from "../../features/user/userSlice"

export default function HomePage() {
    const io = socket
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { value } = useSelector(
        (state: RootState) => state.gameplaye,
    )
    const { email, username } = useSelector(
        (state: RootState) => state.user,
    )

    const userdata = () =>
        getUsername().then((data) => {
            const { email, username } = data
            dispatch(setUserData({ email, username }))
        })

    React.useEffect(() => {
        userdata()
    }, [email])

    const playerGoGame = () => {
        if (!value.includes("x") && !value.includes("0")) {
            io.emit("playe-game", { username, email })
        }
        dispatch(getWhite("white_fog"))
        dispatch(getDrop("view_drop"))
        navigate("/game")
    }

    const robotvsplayer = () => {
        dispatch(setDraw("view_drop_hidden"))
        dispatch(setWinnerStyle("view_drop_hidden"))
        dispatch(setGameOverStyle("view_drop_hidden"))
        dispatch(getWhite("white_fog_hidden"))
    }

    return (
        <div className='flex justify-center'>
            <div className='w-[400px] h-[600px] rounded-lg bg-violet-600 flex justify-center items-baseline'>
                <div className='sellect-container gap-5 mt-[44px] mb-7 mx-28'>
                    <h1 className=' sellect_title'>
                        Sellect Game
                    </h1>

                    <Link
                        className='flex items-center'
                        to='/robot'
                        onClick={robotvsplayer}
                    >
                        <div className='z-10 w-[100px] h-[100px] flex justify-center items-center rounded-full bg-orange-400'>
                            {" "}
                            <div className='w-[71px] h-[69px] sellect_logo'>
                                <Robot />
                            </div>
                        </div>
                        <div className='sellect_btn sellect_btn_yello border-orange-400 bg-orange-600 '>
                            <h6 className='text-center mt-2'>
                                Single Pleyer
                            </h6>
                        </div>
                    </Link>

                    <button
                        onClick={playerGoGame}
                        className='flex items-center '
                    >
                        <div className='z-10 w-[100px] h-[100px] flex justify-center items-center rounded-full bg-fuchsia-600'>
                            {" "}
                            <div className='w-[71px] h-[69px] sellect_logo'>
                                <Pleyer />
                            </div>
                        </div>
                        <div className='sellect_btn sellect_btn_fuchsia'>
                            <h6 className='text-center mt-2'>
                                Two Pleyer
                            </h6>
                        </div>
                    </button>

                    <Link
                        className='flex items-center'
                        to=''
                    >
                        <div className='z-10 w-[100px] h-[100px] flex justify-center items-center rounded-full bg-[#391898]'>
                            {" "}
                            <div className='w-[71px] h-[69px] sellect_logo '>
                                <Market />
                            </div>
                        </div>
                        <div className='sellect_btn bg-[#451CBB]'>
                            <h6 className='text-center mt-2'>
                                Market Player
                            </h6>
                        </div>
                    </Link>

                    <Link
                        className='flex items-center'
                        to=''
                    >
                        <div className='z-10 w-[100px] h-[100px] flex justify-center items-center rounded-full bg-[#33A6BF]'>
                            {" "}
                            <div className='w-[71px] h-[69px] sellect_logo'>
                                <Challenges />
                            </div>
                        </div>
                        <div className='sellect_btn bg-[#4C9BD4]'>
                            <h6 className='text-center mt-2'>
                                Challenges
                            </h6>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
