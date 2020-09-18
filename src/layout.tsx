import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'

import React, { useState } from 'react'
import {
    Route,
    HashRouter as Router,
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
                        <Route exact path="/" basename={process.env.PUBLIC_URL}>
                            <IconsBrowser searchTerm={searchTerm} />
                        </Route>
                        <Route basename={process.env.PUBLIC_URL} path={`/icon/:componentName/:folder?`} render={routeProps => <IconDetail {...routeProps} />} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Layout