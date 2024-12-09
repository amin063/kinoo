import axios from "axios"

const favApiUrl = "https://6756d0ecc0a427baf94a819b.mockapi.io/api"

export const favApi = axios.create({
    baseURL: favApiUrl
})