import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

MenuItem.propTypes = {
    item: PropTypes.object,
    active: PropTypes.bool
}

const MenuItem = ({ item, active }) => (
    <li className={active ? "active" : ""}>
        <Link to={item.path}>{item.title}</Link>
    </li>
)

export default MenuItem