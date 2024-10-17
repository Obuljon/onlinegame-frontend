import { configureStore } from "@reduxjs/toolkit"
import waitReducer from "../features/backdrop/waitSlice"
import gameReducer from "../features/gameplaye/gameSlice"
import playerReducer from "../features/player/playerSlice"
import winnderReducer from "../features/winner/winnerSlice"
import gameoverReducer from "../features/gameover/gameoverSlice"
import whitefogReducer from "../features/whitefog/whitefogSlice"
import drawReducer from "../features/drow/drawSlice"
import robotplyareReducer from "../features/robotplaye/robotvsplayeSlice"
import endtimeReducer from "../features/endtime/endtimeSlice"
import authReducer from "../features/auth/authSlice"
// Configure the store with slices
export const store = configureStore({
    reducer: {
        player: playerReducer,
        wait: waitReducer,
        gameplaye: gameReducer,
        winner: winnderReducer,
        gameover: gameoverReducer,
        whitefog: whitefogReducer,
        draw: drawReducer,
        robot: robotplyareReducer,
        endtime: endtimeReducer,
        auth: authReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
