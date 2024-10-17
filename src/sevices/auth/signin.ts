interface signin {
    email: string
    password: string
}

export default async function signinFetch(data: signin) {
    try {
        return await fetch(
            "http://localhost:4040/api/auth/v1/signin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            },
        )
            .then((res) => res.json())
            .then((res) => {
                if (res.statusCode == 201)
                    return [true, res["message"]]
                else return [false, res["message"]]
            })
            .catch((err) => [false, ["server error !"]])
    } catch (error) {
        return [false, ["server error"]]
    }
}
