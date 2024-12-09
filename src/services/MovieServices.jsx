import { movieApi } from "../api/MovieApi"

export const movieServices = {
    getMovie: async (s) => {
        try {
            const res = await movieApi.get(`/?s=${s}&${import.meta.env.VITE_API_KEY}`)
            return res.data

        } catch (error) {
            console.log(error);

        }
    },
    getMovieDetail: async (i) => {
        try {
            const res = await movieApi.get(`/?i=${i}&${import.meta.env.VITE_API_KEY}`)
            return res.data
        } catch (error) {
            console.log(error);

        }
    }
}