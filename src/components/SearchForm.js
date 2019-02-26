import React, {Component} from 'react'

const API_KEY='bc2cf202'

export class SearchForm extends Component {
    state = {inputMovie : ''}
    

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
            fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(result => {
                const {Search = []} = result
                this.props.onResults(Search)
            })
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input"
                            onChange={this._handleChange}
                            type="text" 
                            placeholder="Search movie"/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
        
    }
}

