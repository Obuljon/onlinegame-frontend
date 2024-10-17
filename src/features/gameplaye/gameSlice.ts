import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"
import React from "react"
import { RootState } from "../../utils/store"

interface gameplaye {
    value: string
}

const initialState: gameplaye = { value: "*********" }

const gameSlice = createSlice({
    name: "gameplaye",
    initialState,
    reducers: {
        createGamePlaye: (
            state,
            action: PayloadAction,
        ) => {},
        setGamePlaye: (
            state,
            action: PayloadAction<string>,
        ) => {
            state.value = action.payload
        },
        restartGamePlaye: (state) => {
            state.value = "*********"
        },
    },
})

export const { setGamePlaye, restartGamePlaye } =
    gameSlice.actions

export default gameSlice.reducer
