const
    React = require('react'),
    ReactDOM = require('react-dom'),
    {createStore} = require('redux'),
    Header = require('./Header'),
    Item = require('./Item'),
    toDos = [
        'climb Mt. Everest',
        'become an astronaut',
        'win the Nobel Peace Prize'
    ],
    reducer = (state = toDos) => state,
    store = createStore(reducer),
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
