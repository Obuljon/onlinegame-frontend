import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"

interface enemy {
    email: string
    username: string
}
const initialState: enemy = {
    email: "",
    username: "enemy",
}

export const enemySlice = createSlice({
    name: "enemy",
    initialState,
    reducers: {
        setEnemy: (state, action: PayloadAction<enemy>) => {
            state.email = action.payload.email
            state.username = action.payload.username
        },
    },
})

export const { setEnemy } = enemySlice.actions

export default enemySlice.reducer
