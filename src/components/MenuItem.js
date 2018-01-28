import React from 'react'
import { Route, Link } from 'react-router-dom'

const MenuItem = ({ item }) => (
    <Route
        path={item.path}
        children={({ match }) => (
            <li className={match ? "active" : ""}>
                <Link to={item.path}>{item.title}</Link>
            </li>
        )}
    />
)

export default MenuItem