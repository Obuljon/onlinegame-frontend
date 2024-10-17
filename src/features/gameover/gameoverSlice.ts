import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"

interface gameover {
    style: string
}

const initialState: gameover = {
    style: "view_drop_hidden",
}

export const gameoverSlice = createSlice({
    name: "gameover",
    initialState,
    reducers: {
        setGameOverStyle: (
            state,
            action: PayloadAction<string>,
        ) => {
            state.style = action.payload
        },
    },
})

export const { setGameOverStyle } = gameoverSlice.actions

export default gameoverSlice.reducer
