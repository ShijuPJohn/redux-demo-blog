const postReducer = (state=[], action) => {
    // console.log(action)
    if (action.type === 'FETCH_POSTS') {
        return action.payload
    }
    return state
}

export default postReducer