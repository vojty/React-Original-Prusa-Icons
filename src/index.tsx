import 'bootstrap/dist/css/bootstrap.min.css'

import * as serviceWorker from './serviceWorker'

import Layout from './layout'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <Layout />
    <footer className="footer mt-auto py-3">
      <div className="container-fluid">
        <span className="text-muted ">Original Prusa Icons Set &copy; 2020{process.env.REACT_APP_BUILD_NUMBER && (' - build ' + process.env.REACT_APP_BUILD_NUMBER)}</span>
      </div>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
