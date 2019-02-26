import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        title : PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }

    render(){
        const {id, title, year, poster} = this.props
        return (
            <Link to={`/detail/${id}`} className="card">
                <div className="card-image-home">
                    <figure className="image is-4by3">
                        <img 
                            alt={title}
                            src={poster}>
                        </img>
                    </figure>
                </div>
                <div className="card-content-home">
                    <div className="media">
                        <div className="media-left">
                        </div>
                        <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
          </Link>
        )
    }
}