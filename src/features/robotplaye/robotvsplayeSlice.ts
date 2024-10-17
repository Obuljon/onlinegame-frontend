import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"
import makeMove from "../../utils/robot"
import { useDispatch } from "react-redux"
import { getDrop } from "../backdrop/waitSlice"

interface gameplaye {
    value: string
    winner: string
}

const initialState: gameplaye = {
    value: "*********",
    winner: "*",
}

const robotSlice = createSlice({
    name: "robot",
    initialState,
    reducers: {
        restartRobotvsPlayer: (
            state,
            action: PayloadAction,
        ) => {
            state.value = "*********"
            state.winner = "*"
        },

        setRobotGamePlaye: (
            state,
            action: PayloadAction<string>,
        ) => {
            state.value = action.payload

            const { result, winner, board } = makeMove(
                action.payload,
            )

            if (winner) {
                state.winner = result
                state.value = board
            } else {
                state.value = board
            }
        },
    },
})

export const { setRobotGamePlaye, restartRobotvsPlayer } =
    robotSlice.actions

export default robotSlice.reducer
