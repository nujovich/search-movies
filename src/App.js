import React, { Component } from 'react'
import {Detail} from './pages/Detail'
import {Home} from './pages/Home'
import {NotFound} from './pages/NotFound'
import {Route, Switch} from 'react-router-dom'
import { BookMark } from './pages/BookMark';
import './App.css';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css';
import { MoviesBookmarked } from './components/MoviesBookmarked';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:movieId' component={Detail}/>
          <Route path='/bookmark/:movieId' component={BookMark}/>
          <Route path='/bookmarks' component={MoviesBookmarked}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
    
}

export default App;
