import axios from "axios"

const movieApiUrl = `https://www.omdbapi.com`

export const movieApi = axios.create({
    baseURL: movieApiUrl
}) 