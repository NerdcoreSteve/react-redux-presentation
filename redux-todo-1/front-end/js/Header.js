const
    React = require('react'),
    foregroundStyle = require('./foregroundStyle'),
    Button = require('./Button')

module.exports = ({titleText}) =>
    <div style={foregroundStyle}>
        {titleText} <Button text='+'/>
    </div>
