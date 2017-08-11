const
    initialState = {
        nextId: 1,
        toDos: []
    },
    last = arr => arr[arr.length - 1],
    head = arr => arr[0],
    tail = arr => arr.slice(1),
    allButLast = arr => arr.slice(0, -1),
    lastOrEmpty = arr => last(arr) ? last(arr) : [],
    addOneFromBottom = (el, arr) =>
        allButLast(arr)
            .concat(el)
            .concat(lastOrEmpty(arr)),
    addOneFromTop = (el, arr) =>
        [head(arr)]
            .concat(el)
            .concat(tail(arr))

module.exports = (state = initialState, action) => {
    switch(action.type) {
        case 'MOVE_UP':
            return {
                ...state,
                toDos: state.toDos.reduce(
                    (toDos, toDo) =>
                        toDo.id === action.id
                            ? addOneFromBottom(toDo, toDos)
                            : toDos.concat(toDo),
                    [])
            }
        case 'MOVE_DOWN':
            return {
                ...state,
                toDos: state.toDos.reduceRight(
                    (toDos, toDo) =>
                        toDo.id === action.id
                            ? addOneFromTop(toDo, toDos)
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
