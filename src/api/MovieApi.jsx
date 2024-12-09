import axios from "axios"

const movieApiUrl = `http://www.omdbapi.com`

export const movieApi = axios.create({
    baseURL: movieApiUrl
}) 