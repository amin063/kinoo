import { favApi } from "../api/FavApi"

export const favServices = {
    setFavList: async (list) => {
        try {
            const res = await favApi.post("/favlists", list)
            console.log(res.data);
        } catch (error) {
            console.log(error);

        }


    },
    getFavList: async(id)=>{
        const res = await favApi.get(`favlists/${id}`)
        return res.data
    },

    getFavLists: async (userId) => {
        try {
            const res = await favApi.get(`/favlists/?userId=${userId}`)
            return res.data
        } catch (error) {
            console.log(error);

        }
    },

    deleteFavList: async (id)=>{
        const res = await favApi.delete(`/favlists/${id}`)
    }
}