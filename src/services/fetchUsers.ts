const _url = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = async () => {
    const response = await fetch(_url)
    return await response.json()
}

export const fetchUsersById = async (id: number) => {
    const response = await fetch(`${_url}/${id}`)
    return await response.json()
}