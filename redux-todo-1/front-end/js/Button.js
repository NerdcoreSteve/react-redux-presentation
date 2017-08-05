const
    React = require('react'),
    buttonStyle = {
        margin: '.2rem'
    }
module.exports = ({text}) =>
    <button style={buttonStyle} type="button">{text}</button> 
