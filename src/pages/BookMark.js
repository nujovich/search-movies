import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { MoviesBookmarked } from '../components/MoviesBookmarked'

export class BookMark extends Component {
    state = { movieId: ''}

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
        this.setState({movieId})
    }
    render() {
        return(
            <div>
                <MoviesBookmarked movieId={this.state.movieId}/> 
            </div>
        )
    }
}