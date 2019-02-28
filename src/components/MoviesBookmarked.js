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
        if(nextProps.movieId !== '') {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${nextProps.movieId}`)
            .then(res => res.json())
            .then(movie => {
                this.setState({ 
                    bookmarks: [...this.state.bookmarks, movie]
                })
            })
        } 
    }
    componentWillUnmount() {
        localStorage.setItem('bookmarks', JSON.stringify(this.state.bookmarks))
    }

    //ComponenDidMount hace que si tiene que renderizar desde el breadcrumb 
    //otra vez guarda la ultima peli adherida al bookmark, componentWillMount no lo hacía
    componentDidMount() {
        var movies = JSON.parse(localStorage.getItem('bookmarks'))
        if(movies !== null) {
            this.setState({ 
                bookmarks: [...this.state.bookmarks, ...movies]
            })
        } else {
            this.setState({ 
                bookmarks: [...this.state.bookmarks, []]
            })
        }
    } 

    _handleCleaning = () => {
        this.setState({bookmarks : []})
    }

    render() {
        const {bookmarks} = this.state
        return (
            <div>
                <BreadCrumb />
                <Title>Bookmarks for you</Title>
                {bookmarks.length !== 0 ? <MovieList movies={bookmarks} /> 
                : <p style={{color: 'red', fontSize: 50}}>You don't have any bookmarks</p>}
            </div>
        )
    }
}

MoviesBookmarked.defaultProps = {
    movieId : ''
}