import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"
import React from "react"
import { RootState } from "../../utils/store"

interface winner {
    style: string
}

const initialState: winner = { style: "view_drop_hidden" }

const winnerSlice = createSlice({
    name: "winner",
    initialState,
    reducers: {
        setWinnerStyle: (
            state,
            action: PayloadAction<string>,
        ) => {
            state.style = action.payload
        },
    },
})

export const { setWinnerStyle } = winnerSlice.actions

export default winnerSlice.reducer
