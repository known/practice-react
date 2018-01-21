import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MenuItem = ({ item, active }) => (
    <li className={active ? "active" : ""}>
        <Link to={item.path}>{item.title}</Link>
    </li>
)

MenuItem.propTypes = {
    item: PropTypes.object,
    active: PropTypes.bool
}

export default MenuItem