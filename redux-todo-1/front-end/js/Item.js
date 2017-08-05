const
    React = require('react'),
    Button = require('./Button'),
    foregroundStyle = require('./foregroundStyle')

module.exports = ({text}) =>
    <div style={foregroundStyle}>
        <Button text='▲'/>
        <Button text='▼'/>
        <input
            type="text"
            readOnly='readonly'
            style={{width: '15rem'}}
            value={text}/>
        <Button text='-'/>
    </div>
