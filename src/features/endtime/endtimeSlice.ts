import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit"

interface endtime {
    time: number
    start: boolean
}

const initialState: endtime = { time: 30, start: false }

export const endtimeSlice = createSlice({
    name: "endtime",
    initialState,
    reducers: {
        startEndTime: (state) => {
            state.start = true
        },
        stopEndTime: (state) => {
            state.start = false
        },
        decrementTime: (state) => {
            if (state.time > 0) {
                state.time--
            }
        },
        resetTime: (state) => {
            state.time = 30
            state.start = false
        },
    },
})

export const {
    startEndTime,
    stopEndTime,
    resetTime,
    decrementTime,
} = endtimeSlice.actions

export default endtimeSlice.reducer
