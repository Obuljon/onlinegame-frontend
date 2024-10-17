import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"

interface wait {
    drop: string
}
const initialState: wait = {
    drop: "view_drop_hidden",
}
export const waitSlice = createSlice({
    name: "wait",
    initialState,
    reducers: {
        getDrop: (state, action: PayloadAction<string>) => {
            state.drop = action.payload
        },
    },
})

export const { getDrop } = waitSlice.actions

export default waitSlice.reducer
