import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import {
    decrementTime,
    stopEndTime,
} from "../../features/endtime/endtimeSlice"
import { socket } from "../../socket"

export default function TimeEnd() {
    const io = socket

    const dispatch = useDispatch()

    const { time, start } = useSelector(
        (state: RootState) => state.endtime,
    )

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null
        if (time == 0 && start) {
            io.emit("game-over")
            dispatch(stopEndTime())
        }
        if (start) {
            interval = setInterval(() => {
                dispatch(decrementTime())
            }, 1000)
        } else if (!start && interval) {
            clearInterval(interval)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [start, time == 0])

    return <div className='text-white'>{time}</div>
}
