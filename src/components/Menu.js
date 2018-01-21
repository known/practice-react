import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {
        menus: PropTypes.array
    }

    state = {
        activeKey: 0
    }

    render() {
        const { menus, ...props } = this.props

        return (
            <Nav {...props}>
                {menus && menus.map((menu, i) => (
                    <MenuItem key={i} item={menu} />
                ))}
            </Nav>
        )
    }
}

export default Menu