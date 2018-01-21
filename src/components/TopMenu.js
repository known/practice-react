import React from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const TopMenu = ({ menus }) => (
    <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">React Practice</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Menu menus={menus} />
        </Navbar.Collapse>
    </Navbar>
)

TopMenu.propTypes = {
    menus: PropTypes.array
}

export default TopMenu