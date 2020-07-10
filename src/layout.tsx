import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'

import React, { useState } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'

import IconDetail from './iconDetail'
import IconsBrowser from './iconsBrowser'
import Menu from './components/menu'

const Layout: React.FC<{}> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    
    return (
        <Router>
            <div className="layout">
                <Menu setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <IconsBrowser searchTerm={searchTerm} />
                        </Route>
                        <Route path={`/icon/:componentName/:folder?`} render={routeProps => <IconDetail {...routeProps} />} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Layout