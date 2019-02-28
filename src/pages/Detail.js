import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { BreadCrumb } from '../components/BreadCrumb';
import { DisableBookmark } from '../components/DisableBookmark';

const API_KEY='bc2cf202'

export class Detail extends Component {
    static propTypes = {
        match : PropTypes.shape({
            params : PropTypes.object,
            isExact : PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state ={movie : {}}

    _fetchMovie({id}) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                this.setState({movie})
            })
    }

    _goBack () {
        window.history.back()
    }

    componentDidMount() {
        const {movieId} = this.props.match.params
        this._fetchMovie({id: movieId})
    }

    render() {
        const {imdbID, Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return(
            <div>
                <BreadCrumb/>
                <div className="card-detail">
                    <figure className="poster-detail">
                        <img
                            alt={Title}
                            src={Poster}/>
                    </figure>
                    <div className="card-content-detail">       
                        <h4 style={{color: '#000', fontSize: 60}}>{Title}</h4>
                        <h2 className="subititle-detail-starring">Starring: {Actors}</h2>
                        <p className="subititle-detail-score">Score: {Metascore}</p>
                        <span className="subititle-detail-sinopsis">
                            Sinopsis: {Plot}
                        </span>
                    </div>
                    <DisableBookmark imdbID={imdbID} />
                </div>
            </div>
        )
    }
}