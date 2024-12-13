export const getUser = (payload) => {
    return {
        type: "GET_USER",
        payload: payload
    }
}