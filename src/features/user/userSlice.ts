import {
    createSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"

interface user {
    email: string
    username: string
}

const initialState: user = { email: "", username: "You" }

export const userSlice = createSlice({
    name: "userdata",
    initialState,
    reducers: {
        setUserData: (
            state,
            action: PayloadAction<any>,
        ) => {
            state.email = action.payload.email
            state.username = action.payload.username
        },
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
