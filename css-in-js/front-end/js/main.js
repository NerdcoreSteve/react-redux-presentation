const
    React = require('react'),
    ReactDOM = require('react-dom'),
    foreGroundStyle = {
        backgroundColor: '#345995',
        color: '#03CEA4',
        padding: '.3rem',
        borderRadius: '.5rem',
        marginLeft: '.3rem',
    },
    Header = ({titleText}) =>
        <h1 style={foreGroundStyle}>{titleText}</h1>,
    Paragraph = ({text}) =>
        <p style={foreGroundStyle}>{text}</p>,
    render = () =>
        ReactDOM.render(
            <div>
                <Header titleText='Yo Yo, What Up?'/>
                <Paragraph
                    text='This is a paragraph. Deal with the real!'/>
            </div>,
            document.getElementById('root'))

render()
