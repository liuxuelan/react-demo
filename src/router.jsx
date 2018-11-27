import React from 'react'
import { HashRouter, Route as Router} from "react-router-dom";
import { Provider } from 'react-redux'
import App from '/app'
const store = configureStore();
class Root extends React.Component {
  
  render(){
    return(
      
        <Router>
          <Route path="/" component={App}/>
        </Router>
      
    )
  }
}

export default Root;