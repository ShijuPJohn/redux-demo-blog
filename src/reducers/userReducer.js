 const userReducer = (state = [], action) => {
    // console.log(action)
    if (action.type === 'FETCH_USERS') {
        return action.payload
    }
    return state
}
 export default userReducer