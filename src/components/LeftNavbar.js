import React from 'react'
import PropTypes from 'prop-types'
import { Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LeftNavbar = ({ menus }) => (
    <Nav bsStyle="pills" stacked>
        {menus && menus.map((menu, i) => (
            <NavItem>
                <Link key={i} to={menu.path}>{menu.title}</Link>
            </NavItem>
        ))}
    </Nav>
)

LeftNavbar.propTypes = {
    menus: PropTypes.array
}

export default LeftNavbar