import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { setAuth } from "../../features/auth/authSlice"

interface authinput {
    name: string
    type: string
    placeholder: string
}

export default function AuthInput({
    name,
    type,
    placeholder,
}: authinput) {
    const dispatch = useDispatch()
    const data = useSelector(
        (state: RootState) => state.auth,
    )

    const [value, setValue] = useState("")

    const handleChange = (e: any) => {
        setValue(e.target.value)
        dispatch(
            setAuth({ ...data, [name]: e.target.value }),
        )
    }

    return (
        <input
            name={name}
            type={type}
            className='auth_input px-5'
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    )
}
