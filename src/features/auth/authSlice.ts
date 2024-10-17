import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"

interface auth {
    email: string
    username: string
    password: string
    confirmpassword: string
}

const initialState: auth = {
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<auth>) => {
            state.email = action.payload.email
            state.username = action.payload.username
            state.password = action.payload.password
            state.confirmpassword =
                action.payload.confirmpassword
        },
        restAuth: (state) => {
            ;(state.email = ""),
                (state.username = ""),
                (state.password = ""),
                (state.confirmpassword = "")
        },
    },
})

export const { setAuth, restAuth } = authSlice.actions
export default authSlice.reducer
