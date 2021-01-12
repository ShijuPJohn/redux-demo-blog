export const demoReducer = (state = true, action) => {
    console.log(action)
    if (action.type === 'FETCH_POSTS') {
        return !state
    }
    return state
}