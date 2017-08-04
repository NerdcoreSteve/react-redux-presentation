const
    React = require('react'),
    ReactDOM = require('react-dom'),
    Header = ({titleText}) =>
        <h1>{titleText}</h1>,
    Paragraph = ({text}) =>
        <p>{text}</p>,
    render = () =>
        ReactDOM.render(
            <div>
                <Header titleText='Yo Yo, What Up?'/>
                <Paragraph
                    text='This is a paragraph. Deal with the real!'/>
            </div>,
            document.getElementById('root'))

render()
