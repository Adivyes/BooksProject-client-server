import React from 'react'
import {Home, Books} from './components/pages';
import {Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

export default function RouterBookApp() {
    return (
        <Router>
        <div>
            <Link to='/'>Home</Link><br/>
            <Link to='/Books'>Books</Link>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Books' component={Books}/>
                <Route/>
            </Switch>
        </div>
        </Router>
    )
}
