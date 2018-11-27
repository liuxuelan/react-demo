import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';

class App extends React.Component {
  
  render(){
    return(
      <div id="app">
        <Router>
          <Route path="/" component='Home'></Route>
        </Router>
      </div>
    )
  }
}

ReactDom.render(<App />,
document.getElementById('app'));