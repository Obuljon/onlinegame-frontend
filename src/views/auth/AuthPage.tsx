import React from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { restAuth } from "../../features/auth/authSlice"

export default function AuthPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signinpage = () => {
        dispatch(restAuth())
    }
    const signuppage = () => {
        dispatch(restAuth())
    }

    return (
        <div className='main-container'>
            <div className='auth_container my-5'>
                <div className='h-[100%] flex flex-col justify-center items-center gap-2'>
                    <Link to='/signin'>
                        {" "}
                        <button
                            onClick={signinpage}
                            className='auth_btn'
                        >
                            Login
                        </button>
                    </Link>
                    <Link to='/signup'>
                        {" "}
                        <button
                            onClick={signuppage}
                            className='auth_btn'
                        >
                            Register
                        </button>
                    </Link>
                    <p className='auth_help'>
                        Continue as a guest
                    </p>
                </div>
            </div>
        </div>
    )
}
