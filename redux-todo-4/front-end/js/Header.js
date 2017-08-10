const
    React = require('react'),
    PropTypes = require('prop-types')

const
    foregroundStyle = require('./foregroundStyle'),
    Button = require('./Button'),
    Header = ({titleText}, {store}) =>
        <div
            style={foregroundStyle}
            onClick={() => store.dispatch({type: 'ADD'})}>
                {titleText} <Button text='+'/>
        </div>

Header.contextTypes = {
    store: PropTypes.object
}

module.exports = Header
