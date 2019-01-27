import React from 'react'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'

export default class TextInput extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        className: PropTypes.string,
        value: PropTypes.number,
        onChange: PropTypes.func.isRequired
    }

    render() {

        return (
            <input
                type="text"
                className={cx(
                    css`
                        background: none;
                        border: none;
                    `,
                    this.props.className
                )}
                value={this.props.value || ''}
                onChange={this.handleChange}
            />
        )
    }

    handleChange = (e) => {

        this.props.onChange({
            id: this.props.id,
            value: e.target.value === '' ? null : e.target.value
        })
    }
}