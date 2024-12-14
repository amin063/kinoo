export const inputValueReducer = (state = ["panda"], action) => {
    switch (action.type) {
        case "CHANGE_HOME_MOVIES":
            return action.payload
        default:
            return state
    }
}