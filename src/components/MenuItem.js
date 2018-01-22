import React from 'react'
import PropTypes from 'prop-types'
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

MenuItem.propTypes = {
    item: PropTypes.object,
    active: PropTypes.bool
}

export default MenuItem