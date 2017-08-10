const
    tap = x => { console.log(x); return x},
    initialState = {
        nextId: 1,
        toDos: []
    },
    last = arr => arr[arr.length - 1],
    allButLast = arr => arr.slice(0, -1),
    head = (head, ...tail) => head,
    tail = (head, ...tail) => tail

module.exports = (state = initialState, action) => {
    switch(action.type) {
        case 'MOVE_UP':
            return {
                ...state,
                toDos: state.toDos.reduce(
                    (toDos, toDo) =>
                        toDo.id === action.id
                            ? allButLast(toDos)
                                .concat(toDo)
                                .concat(last(toDos))
                            : toDos.concat(toDo),
                    [])
            }
        case 'MOVE_DOWN':
            return {
                ...state,
                toDos: state.toDos.reduceRight(
                    (toDos, toDo) =>
                        tap(toDo).id === action.id
                            ? head(toDos).concat(toDo).concat(tail(toDos))
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
