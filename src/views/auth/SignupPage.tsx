import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { AuthInput, Back, LogoGrup } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/store"
import { signupFetch } from "../../sevices"
import { restAuth } from "../../features/auth/authSlice"
export default function SignupPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector(
        (state: RootState) => state.auth,
    )
    const [msg, setMsg] = useState([" "])
    const signupOnClick = async () => {
        const [success, message] = await signupFetch(data)
        if (success) {
            dispatch(restAuth())
            navigate("/signin")
        } else {
            setMsg(message)
        }
    }
    const exitPage = () => {
        dispatch(restAuth())
    }
    return (
        <div className='main-container'>
            <div className='auth_container'>
                <Link
                    onClick={exitPage}
                    to='/auth'
                    className='w-10 h-10 inline-block mt-5 mx-6 mb-10'
                >
                    <Back />
                </Link>

                <h1 className='auth_title mx-6 mb-14 mt-5'>
                    Welcome back! Glad to see you, Again!
                </h1>
                <div>
                    {msg.map((item, index) => (
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
                        name={"username"}
                        type={"text"}
                        placeholder={"Username"}
                    />
                    <AuthInput
                        name='email'
                        type={"email"}
                        placeholder={"Email"}
                    />
                    <AuthInput
                        name='password'
                        type={"password"}
                        placeholder={"Password"}
                    />
                    <AuthInput
                        name='confirmpassword'
                        type={"password"}
                        placeholder={"Confirm password"}
                    />
                    <button
                        type='button'
                        className='auth_btn'
                        onClick={signupOnClick}
                    >
                        Agree and Register
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
            </div>
        </div>
    )
}
