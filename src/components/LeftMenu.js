import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

LeftMenu.propTypes = {
    menus: PropTypes.array
}

const LeftMenu = ({ menus }) => <Menu menus={menus} bsStyle="pills" stacked />

export default LeftMenu