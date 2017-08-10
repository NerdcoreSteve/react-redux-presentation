const
    initialState = {
        nextKey: 4,
        toDos: [
            {
                key: 1,
                text: 'climb Mt. Everest',
            },
            {
                key: 2,
                text: 'become an astronaut',
            },
            {
                key: 3,
                text: 'win the Nobel Peace Prize',
            },
        ]
    }

module.exports = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                nextKey: state.nextKey + 1,
                toDos: state.toDos.concat([{
                    key: state.nextKey,
                    text: 'Do a thing'
                }])
            }
        default:
            return state
    }
}
