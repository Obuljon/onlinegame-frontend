export default async function getUsername() {
    const token = window.localStorage.getItem("token") || ""
    const headers = new Headers()
    headers.append("access_token", token)
    headers.append("Content-Type", "application/json")
    return fetch("http://localhost:4040/api/myname", {
        method: "GET",
        headers,
    })
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => null)
}
