const
    React = require('react'),
    ReactDOM = require('react-dom'),
    {createStore} = require('redux'),
    {Provider} = require('react-redux')

const
    Header = require('./Header'),
    Item = require('./Item'),
    reducer = require('./reducer'),
    store = createStore(reducer)

const
    render = () =>
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <Header titleText='To Do List'/>
                    {store.getState().toDos
                        .map(({text, key}) =>
                            <Item text={text} key={key}/>)}
                </div>
            </Provider>,
            document.getElementById('root'))

store.subscribe(render)
render()
