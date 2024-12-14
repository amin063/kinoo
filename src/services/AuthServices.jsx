import { favApi } from "../api/FavApi"

export const authServices = {
    createUser: async (user) => {

        console.log(user.username);

        try {
            const res = await favApi.get(`/users/?username=${user.username}`)
            if (res.data.length) {
                alert("This username is already. Please try another username")
                return
            }
        } catch (error) {
            alert("success!")
            const postRes = await favApi.post("/users", user)
            if (!postRes.data) {
                alert("An error occurred, please try again later.")
            }
        }

        const postRes = await favApi.post("/users", user)
        if (!postRes.data) {
            alert("An error occurred, please try again later.")
        }
    },

        loginUser: async (user) => {

            try {
                const res = await favApi.get(`/users/?username=${user.username}&pass=${user.pass}`)
                const realUsername = res.data[0].username
                const realPass = res.data[0].pass
                if (user.username === realUsername && user.pass === realPass) {
                    console.log(res);
                    return res.data
                } else {
                    alert("Wrong username or password")
                }
            } catch (error) {
                alert("Wrong username or password catchdadi")
            }


        }
    }



