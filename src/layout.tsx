import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'

import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'

import IconDetail from './iconDetail'
import IconsBrowser from './iconsBrowser'
import Menu from './components/menu'
import React from 'react'

const Layout: React.FC<{}> = () => {

    return (
        <Router>
            <div className="layout">
                <Menu />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <IconsBrowser />
                        </Route>
                        <Route path={`/icon/:componentName/:folder?`} render={routeProps => <IconDetail {...routeProps} />} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Layout