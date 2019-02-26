import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Title} from '../components/Title'

export class BookMark extends Component {
    static propTypes = {
        match : PropTypes.shape({
            params : PropTypes.object,
            isExact : PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    componentDidMount() {
        const {movieId} = this.props.match.params
        console.log(movieId)
    }
    render() {
        return(
            <div>
                <Title>Bookmark movie</Title>
            </div>
        )
    }
}