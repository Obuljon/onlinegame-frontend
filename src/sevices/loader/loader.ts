export default async function getUserToken() {
    const token = window.localStorage.getItem("token") || ""
    const headers = new Headers()
    headers.append("access_token", token)
    headers.append("Content-Type", "application/json")
    return fetch("http://localhost:4040/api/authtest", {
        method: "GET",
        headers,
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.statusCode == 200) return true
            else return false
        })
        .catch((err) => null)
}
