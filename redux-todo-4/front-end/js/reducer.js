const
    initialState = {
        nextId: 1,
        toDos: []
    },
    last = arr => arr[arr.length - 1]

module.exports = (state = initialState, action) => {
    switch(action.type) {
        case 'MOVE_UP':
            return {
                ...state,
                toDos: state.toDos.reduce(
                    (toDos, toDo) =>
                        toDo.id === action.id
                            ? toDos.slice(0, -1)
                                .concat(toDo)
                                .concat(last(toDos) ? last(toDos) : [])
                            : toDos.concat(toDo),
                    [])
            }
        case 'MOVE_DOWN':
            return {
                ...state,
                toDos: state.toDos.reduceRight(
                    (toDos, toDo) =>
                        toDo.id === action.id
                            ? [toDos[0]].concat([toDo]).concat(toDos.slice(1))
                            : [toDo].concat(toDos),
                    [])
            }
        case 'CHANGE_TEXT':
            return {
                ...state,
                toDos: state.toDos.reduce(
                    (toDos, toDo) =>
                        toDo.id === action.id
                            ? toDos.concat({
                                ...toDo,
                                text: action.text
                            })
                            : toDos.concat(toDo),
                    [])
            }
        case 'ADD':
            return {
                ...state,
                nextId: state.nextId + 1,
                toDos: [{
                    key: state.nextId,
                    id: state.nextId,
                    text: ''
                }]
                    .concat(state.toDos)
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
