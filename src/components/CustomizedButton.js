import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class CustomizedButton extends Component {
    render() {
        const {linkTo, isDisabled, children} = this.props
        if(isDisabled) {
            return (
                <Link to={linkTo} className="button is-info" disabled>{children}</Link>
            )
        }
        return (
            <Link to={linkTo} className="button is-info">{children}</Link>
        )
    }
}

CustomizedButton.defaultProps = {
    isDisabled : false,
    linkTo : '',
    children: ''
}