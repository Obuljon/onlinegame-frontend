import { getUserToken } from "../../sevices"
import { redirect } from "react-router-dom"

export default async function Loaderauth(props: any) {
    const ismatch = await getUserToken()
    if (ismatch) return redirect("/")
    return props
}
