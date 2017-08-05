const
    React = require('react'),
    ReactDOM = require('react-dom'),
    {createStore} = require('redux'),
    Button = require('./Button'),
    toDos = [
        'climb Mt. Everest',
        'become an astronaut',
        'win the Nobel Peace Prize'
    ],
    reducer = (state = toDos, action) => {
        switch(action.type) {
            default:
                return state
        }
    },
    store = createStore(reducer),
    foreGroundStyle = {
        backgroundColor: '#345995',
        color: '#03CEA4',
        padding: '.3rem',
        borderRadius: '.5rem',
        margin: '.3rem',
    },
    Header = ({titleText}) =>
        <div style={foreGroundStyle}>
            {titleText} <Button text='+'/>
        </div>,
    Item = ({text}) =>
        <div style={foreGroundStyle}>
            <Button text='▲'/>
            <Button text='▼'/>
            <input
                type="text"
                readOnly='readonly'
                style={{width: '15rem'}}
                value={text}/>
            <Button text='-'/>
        </div>,
    render = () =>
        ReactDOM.render(
            <div>
                <Header titleText='To Do List'/>
                {store.getState()
                    .map((text, key) => ({text, key}))
                    .map(({text, key}) =>
                        <Item text={text} key={key}/>)}
            </div>,
            document.getElementById('root'))

render()
