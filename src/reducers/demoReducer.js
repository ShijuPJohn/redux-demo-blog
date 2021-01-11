export const demoReducer = (state = true, action) => {
    console.log(action)
    if (action.type === 'NOTHING') {
        return !state
    }
    return state
}