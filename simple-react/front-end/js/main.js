const
    React = require('react'),
    ReactDOM = require('react-dom'),
    render = () =>
        ReactDOM.render(
            <div>
                <h1>Hey this is a header!</h1>
                <p>Hey this is a paragraph!!</p>
            </div>,
            document.getElementById('root'))

render()
