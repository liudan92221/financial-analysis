import React from 'react'
import { Router } from 'react-router'
import { createHashHistory as createHistory } from 'history'

// class BrowserRouter extends React.Component {
//   history = createHistory(this.props)

//   render() {
//     return <Router history={this.history} children={this.props.children} />
//   }
// }

export let history = null
function HashRouter(props) {
  history = createHistory(props)
  
  return <Router history={history} children={props.children} />
}

export default HashRouter