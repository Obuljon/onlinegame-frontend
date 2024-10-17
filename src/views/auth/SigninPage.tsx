import React, { useState } from "react"
import { AuthInput, Back, LogoGrup } from "../../components"
import {
    Link,
    NavLink,
    useNavigate,
} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { signinFetch } from "../../sevices"
import { restAuth } from "../../features/auth/authSlice"

export default function SigninPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector(
        (state: RootState) => state.auth,
    )
    const [msg, setMsg] = useState([" "])
    const onclick = async () => {
        const { email, password } = data
        const [success, result] = await signinFetch({
            email,
            password,
        })
        setMsg([" "])
        if (success) {
            localStorage.setItem("token", result)
            dispatch(restAuth())
            navigate("/")
        } else {
            setMsg(result)
        }
    }
    return (
        <div className='main-container'>
            <div className='auth_container'>
                <Link
                    to='/auth'
                    className='w-10 h-10 inline-block mt-5 mx-6 mb-10'
                >
                    <Back />
                </Link>
                <h1 className='auth_title mx-6 mb-14 mt-5'>
                    Welcome back! Glad to see you, Again!
                </h1>
                <div>
                    {msg &&
                        msg.map((item, index) => (
                            <p
                                key={index}
                                className='text-red-900 mx-10'
                            >
                                {item}
                            </p>
                        ))}
                </div>
                <form className='auth_form'>
                    <AuthInput
                        name='email'
                        type={"email"}
                        placeholder={"Enter your email"}
                    />

                    <AuthInput
                        name='password'
                        type={"password"}
                        placeholder={"Enter your password"}
                    />

                    <button
                        onClick={onclick}
                        type='button'
                        className='auth_btn'
                    >
                        Login
                    </button>
                </form>

                <div className='flex justify-center items-center gap-3  mt-7 mb-5 '>
                    <p className='auth_line'></p>
                    <p className='font-[Urbanist-Medium-600] text-base'>
                        Or Login with
                    </p>
                    <p className='auth_line'></p>
                </div>

                <LogoGrup />

                <p className='flex justify-center items-center mt-20 mb-5'>
                    {/* Don’t have an account? Register Now */}
                </p>
            </div>
        </div>
    )
}
