import React, {Component} from 'react'
import {CustomizedButton} from './CustomizedButton';

export class DisableBookmark extends Component {

    _disableBookMark(imdbID){
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        console.log(bookmarks)
        if(bookmarks !== []) {
            for (let j = 0; j < bookmarks.length; j++) {
                if (bookmarks[j].imdbID === imdbID ) {
                    console.log('No se puede hacer bookmark')
                    return true
                 }    
            }
        }
        return false
    }
    render() {
        const {imdbID} = this.props
        return (
            this._disableBookMark(imdbID) 
            ? <CustomizedButton isDisabled={true}>Bookmark this movie</CustomizedButton>
            : <CustomizedButton linkTo={`/bookmark/${imdbID}`} isDisabled={false}>Bookmark this movie</CustomizedButton>
        )
    }
}
