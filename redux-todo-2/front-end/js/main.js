const
    React = require('react'),
    ReactDOM = require('react-dom'),
    {createStore} = require('redux'),
    {Provider} = require('react-redux'),
    Header = require('./Header'),
    Item = require('./Item'),
    toDos = [
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
    ],
    reducer = (state = toDos) => state,
    store = createStore(reducer),
    render = () =>
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <Header titleText='To Do List'/>
                    {store.getState()
                        .map(({text, key}) =>
                            <Item text={text} key={key}/>)}
                </div>
            </Provider>,
            document.getElementById('root'))

render()
