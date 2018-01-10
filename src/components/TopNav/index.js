import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class TopNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Nav>
                <NavItem eventKey={1} href="/hello">Hello</NavItem>
                <NavItem eventKey={2} href="/blog">Blog</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        );
    }
}