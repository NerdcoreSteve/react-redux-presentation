const
    React = require('react'),
    PropTypes = require('prop-types'),
    Button = require('./Button'),
    foregroundStyle = require('./foregroundStyle'),
    Item = ({text, id}, {store}) =>
        <div style={foregroundStyle}>
            <Button text='▲'/>
            <Button text='▼'/>
            <input
                type="text"
                onChange={({target:{value: text}}) =>
                    store.dispatch({type: 'CHANGE_TEXT', id, text})}
                style={{width: '15rem'}}
                value={text}/>
            <Button
                text='-'
                onClick={() => store.dispatch({type: 'REMOVE', id})}/>
        </div>

Item.contextTypes = {
    store: PropTypes.object
}

module.exports = Item
