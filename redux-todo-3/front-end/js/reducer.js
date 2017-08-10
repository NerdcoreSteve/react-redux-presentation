const
    initialState = {
        nextId: 1,
        toDos: []
    }

module.exports = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                toDos: state.toDos.reduce(
                    (toDos, toDo) =>
                        toDo.id === action.id
                            ? toDos.concat([{
                                ...toDo,
                                text: action.text
                            }])
                            : toDos.concat(toDo),
                    [])
            }
        case 'ADD':
            return {
                ...state,
                nextId: state.nextId + 1,
                toDos: state.toDos.concat([{
                    key: state.nextId,
                    id: state.nextId,
                    text: ''
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
