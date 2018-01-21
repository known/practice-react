import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarItem from './NavbarItem'

const TopNavbar = ({ channels }) => (
    <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">React Practice</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                {channels && channels.map((channel, i) => (
                    <NavbarItem key={i} item={channel} />
                ))}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

TopNavbar.propTypes = {
    channels: PropTypes.array
}

export default TopNavbar