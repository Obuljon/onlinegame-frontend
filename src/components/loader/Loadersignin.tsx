import { getUserToken } from "../../sevices"
import { redirect } from "react-router-dom"

export default async function Loadersignin(props: any) {
    const ismatch = await getUserToken()
    if (ismatch) return props
    else {
        window.localStorage.clear()
        return redirect("/auth")
    }
}
