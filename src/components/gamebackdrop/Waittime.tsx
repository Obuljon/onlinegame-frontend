import React, { useEffect, useState } from "react"
import { RootState } from "../../utils/store"
import { useSelector } from "react-redux"

export default function Waittime() {
    const style = useSelector(
        (state: RootState) => state.wait.drop,
    )

    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        clearInterval(undefined)

        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
        }, 1000)

        setSeconds(0)
        return () => {
            clearInterval(interval)
        }
    }, [style])
    return (
        <div className='text-white text-2xl font-medium'>
            {Math.floor(seconds / 60)} :{" "}
            {seconds < 10
                ? "0" + (seconds % 60)
                : seconds % 60}
        </div>
    )
}
