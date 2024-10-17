interface signup {
    email: string
    username: string
    password: string
    confirmpassword: string
}

export default async function signupFetch(
    body: signup,
): Promise<any> {
    try {
        return await fetch(
            "http://localhost:4040/api/auth/v1/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            },
        )
            .then((res) => res.json())
            .then((res) => {
                if (res.statusCode !== 201)
                    return [true, [res.message]]
                else return [false, [res.message]]
            })
            .catch((err) => {
                console.log(err)
                return [false, ["server error !"]]
            })
    } catch (error) {
        console.log(error)
        return [false, ["server errors !!!"]]
    }
}
