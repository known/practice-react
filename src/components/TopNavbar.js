import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                    <li>
                        <Link key={i} to={channel.path}>{channel.title}</Link>
                    </li>
                ))}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

TopNavbar.propTypes = {
    channels: PropTypes.array
}

export default TopNavbar