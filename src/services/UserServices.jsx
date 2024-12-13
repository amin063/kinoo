import { favApi } from "../api/FavApi"

export const userServices = {
    getUser: async (id) => {
        const res = await favApi.get(`/users/${id}`)
        return res.data
    }
}