const
    initialState = {
        nextKey: 1,
        toDos: []
    }

module.exports = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                nextKey: state.nextKey + 1,
                toDos: state.toDos.concat([{
                    key: state.nextKey,
                    id: state.nextKey,
                    text: 'Do a thing'
                }])
            }
        case 'REMOVE':
            return {
                ...state,
                toDos: state.toDos
                    .filter(toDo =>
                        toDo.id !== action.id)
            }
        default:
            return state
    }
}
