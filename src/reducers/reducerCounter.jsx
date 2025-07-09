let initialState = {
    count: 0
}
const reducerCounter = (state = initialState, action) => {
    switch (action.type) {
        case "+": {
            return {...state, count: state.count + action.payload}
        }
        case "-": {
            return {...state, count: state.count - action.payload}
        }
        case "+5": {
            return {...state, count: state.count + action.payload}
        }
        case "reset": {
            return initialState;
        }
            
        default:
            return state;
    }
}
export default reducerCounter;