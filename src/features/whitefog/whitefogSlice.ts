import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"

interface whitefog {
    white_fog: string
}
const initialState: whitefog = {
    white_fog: "white_fog",
}
export const whitefogSlice = createSlice({
    name: "wait",
    initialState,
    reducers: {
        getWhite: (
            state,
            action: PayloadAction<string>,
        ) => {
            state.white_fog = action.payload
        },
    },
})

export const { getWhite } = whitefogSlice.actions

export default whitefogSlice.reducer
