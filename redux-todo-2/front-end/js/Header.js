const
    React = require('react'),
    PropTypes = require('prop-types')

const
    foregroundStyle = require('./foregroundStyle'),
    Button = require('./Button'),
    Header = ({titleText}, {store}) =>
        <div
            style={foregroundStyle}
            onClick={() => console.log('store', store)}>
                {titleText} <Button text='+'/>
        </div>

Header.contextTypes = {
    store: PropTypes.object
}

module.exports = Header
