import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"
import React from "react"
import { RootState } from "../../utils/store"

interface player {
    gameposition: string
    gamestart: boolean
}

const initialState: player = {
    gameposition: "",
    gamestart: false,
}

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setPlayer: (state, action: PayloadAction<any>) => {
            state.gameposition = action.payload.gameposition
            state.gamestart = action.payload.gamestart
        },
    },
})

export const { setPlayer } = playerSlice.actions

export default playerSlice.reducer
