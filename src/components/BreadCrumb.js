import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export const BreadCrumb = () => (
  <nav className="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li>
        <Link to='/'>
        <FontAwesomeIcon icon={faHome}/>
        <span>Movie Search</span>
        </Link>
    </li>
    <li>
        <Link to='/bookmarked'>
            <FontAwesomeIcon icon={faBookmark}/>
            <span>View bookmarked movies</span>
        </Link>
    </li>
  </ul>
</nav>
)