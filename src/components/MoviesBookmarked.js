import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { MovieList } from './MovieList';
import { BreadCrumb } from './BreadCrumb';
import { Title } from './Title';

const API_KEY ='bc2cf202'
export class MoviesBookmarked extends Component {
    static propTypes = {
        movieId : PropTypes.string,
    }

    state = {bookmarks: []}


    componentWillReceiveProps(nextProps) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${nextProps.movieId}`)
        .then(res => res.json())
        .then(movie => {
            this.setState({ 
                bookmarks: [...this.state.bookmarks, movie]
            })
        })
    }
    /* componentWillUnmount() {
        localStorage.setItem('bookmarks', JSON.stringify(this.state.movies))
    }
      
    componentWillMount() {
        var movies = JSON.parse(localStorage.getItem('bookmarks'))
        this.setState({movies})
    } */


    render() {
        const {bookmarks} = this.state
        console.log({bookmarks})
        return (
            <div>
                <BreadCrumb />
                <Title>Bookmarks for you</Title>
                <MovieList movies={bookmarks} />
            </div>
        )
    }
}