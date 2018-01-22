import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import MenuItem from './MenuItem'

const Menu = ({ menus, ...props }) => (
    <Nav {...props}>
        {menus && menus.map((menu, i) => (
            <MenuItem key={i} item={menu} />
        ))}
    </Nav>
)

Menu.propTypes = {
    menus: PropTypes.array
}

export default Menu