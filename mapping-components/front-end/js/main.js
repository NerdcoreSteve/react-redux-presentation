const
    tap = x => {console.log(x); return x},
    React = require('react'),
    ReactDOM = require('react-dom'),
    foreGroundStyle = {
        backgroundColor: '#345995',
        color: '#03CEA4',
        padding: '.3rem',
        borderRadius: '.5rem',
        marginLeft: '.3rem',
    },
    paragraphs = [
        'Life is like a hurricane',
        'Here in Duckburg',
        'Race cars, lasers, aeroplanes',
        'It\'s a duck blur!',
    ],
    Header = ({titleText}) =>
        <h1 style={foreGroundStyle}>{titleText}</h1>,
    Paragraph = ({text}) =>
        <p style={foreGroundStyle}>{text}</p>,
    render = () =>
        ReactDOM.render(
            <div>
                <Header titleText='Yo Yo, What Up?'/>
                {paragraphs
                    .map((paragraph, key) => ({text: paragraph, key}))
                    .map(({text, key}) =>
                        <Paragraph text={text} key={key}/>)}
            </div>,
            document.getElementById('root'))

render()
