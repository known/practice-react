import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavbarItem = ({ item }) => (
    <li>
        <Link to={item.path}>{item.title}</Link>
    </li>
)

NavbarItem.propTypes = {
    item: PropTypes.object
}

export default NavbarItem