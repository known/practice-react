import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import NavbarItem from './NavbarItem'

const LeftNavbar = ({ menus }) => (
    <Nav bsStyle="pills" stacked>
        {menus && menus.map((menu, i) => (
            <NavbarItem key={i} item={menu} />
        ))}
    </Nav>
)

LeftNavbar.propTypes = {
    menus: PropTypes.array
}

export default LeftNavbar