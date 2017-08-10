const
    React = require('react'),
    buttonStyle = {
        margin: '.2rem'
    }

module.exports = ({text, onClick}) =>
    <button
        style={buttonStyle}
        type="button"
        onClick={onClick}>
            {text}
    </button> 
