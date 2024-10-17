import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"

interface draw {
    style: string
}

const initialState: draw = {
    style: "view_drop_hidden",
}

export const drawSlice = createSlice({
    name: "draw",
    initialState,
    reducers: {
        setDraw: (state, action: PayloadAction<string>) => {
            state.style = action.payload
        },
    },
})

export const { setDraw } = drawSlice.actions

export default drawSlice.reducer
