import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'emotion'

export default class TextInput extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        size: PropTypes.oneOf([
            'sm',
            'md'
        ])
    }

    static defaultProps = {
        disabled: false,
        size: 'md',
        type: 'text'
    }

    render() {

        const { id, type, placeholder, size, disabled, value } = this.props

        return (
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={cx(
                    css`
                        background-color: #fff;
                        border: 1px solid #d9d9d9;
                        border-radius: 3px;
                        color: #191919;
                        display: block;
                        font-size: 16px;
                        height: ${size === 'sm' ? '30px' : '38px'};
                        line-height: 1.42857;
                        padding: 5px 15px;
                        transition: border-color .15s ease-in-out;
                        width: 100%;
                        -webkit-appearance: none;
                        &:focus {
                            -webkit-transition-duration: 0s;
                            border-color: #07f;
                            outline: 0;
                            transition-duration: 0s;
                        }
                    `,
                    this.props.disabled ? css`
                        background-color: #f9f9f9;
                    ` : null,
                    'TextInput',
                    this.props.className
                )}
                disabled={disabled}
                value={value || ''}
                onChange={this.handleChange}
            />
        )
    }

    handleChange = (e) => {

        if (!this.props.onChange) {
            return
        }

        this.props.onChange({
            id: this.props.id,
            value: e.target.value === '' ? null : e.target.value
        })
    }
}