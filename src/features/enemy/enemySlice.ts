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
        clearEnemy: (state) => {
            state = initialState
        },
    },
})

export const { setEnemy, clearEnemy } = enemySlice.actions

export default enemySlice.reducer
