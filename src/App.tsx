import * as React from "react"
import { createRoot } from "react-dom/client"

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    redirect,
} from "react-router-dom"

import {
    AuthPage,
    GamePage,
    NotFoundPage,
    HomePage,
    SigninPage,
    SignupPage,
    RobotVsPlayer,
} from "./views"
import "./App.scss"
import { socket } from "./socket"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./utils/store"
import {
    resetTime,
    startEndTime,
    stopEndTime,
} from "./features/endtime/endtimeSlice"
import { getWhite } from "./features/whitefog/whitefogSlice"
import { setGamePlaye } from "./features/gameplaye/gameSlice"
import { setPlayer } from "./features/player/playerSlice"
import { getDrop } from "./features/backdrop/waitSlice"
import Loadersignin from "./components/loader/Loadersignin"
import { Loaderauth } from "./components"
import { setEnemy } from "./features/enemy/enemySlice"

export default function App() {
    const router = createBrowserRouter([
        {
            path: "",
            loader: () => Loadersignin(<HomePage />),
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/game",
                    element: <GamePage />,
                },
                {
                    path: "/robot",
                    element: <RobotVsPlayer />,
                },
            ],
        },
        {
            path: "/auth",
            element: <AuthPage />,
            loader: () => Loaderauth(<AuthPage />),
        },
        {
            path: "/signin",
            element: <SigninPage />,
            loader: () => Loaderauth(<SigninPage />),
        },
        {
            path: "/signup",
            element: <SignupPage />,
            loader: () => Loaderauth(<SignupPage />),
        },
        {
            path: "*",
            element: <NotFoundPage />,
        },
    ])
    const io = socket
    const dispatch = useDispatch()

    const { gameposition, gamestart } = useSelector(
        (state: RootState) => state.player,
    )
    const { value } = useSelector(
        (state: RootState) => state.gameplaye,
    )

    const enemy = useSelector(
        (state: RootState) => state.enemy,
    )

    io.on(
        "live-game",
        ({
            background,
            placegame,
            playe,
            username,
            walkinggame,
        }) => {
            if (gameposition !== walkinggame) {
                dispatch(getWhite("white_fog"))
                dispatch(stopEndTime())
            } else {
                dispatch(startEndTime())
                dispatch(getWhite("white_fog_hidden"))
                dispatch(setGamePlaye(background))
            }
        },
    )

    io.on(
        "players-game",
        ({ gameposition, gamestart, myenemy }) => {
            console.log(myenemy)
            dispatch(setEnemy(myenemy))

            if (gamestart) {
                dispatch(startEndTime())
                dispatch(getWhite("white_fog_hiddin"))
            }

            dispatch(
                setPlayer({
                    gameposition,
                    gamestart,
                }),
            )
            dispatch(getDrop("view_drop_hidden"))
        },
    )

    return <RouterProvider router={router} />
}
