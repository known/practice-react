import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

const LeftMenu = ({ menus }) => <Menu menus={menus} className="left-menu" stacked />

LeftMenu.propTypes = {
    menus: PropTypes.array
}

export default LeftMenu