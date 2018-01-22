import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

const LeftMenu = ({ menus }) => <Menu menus={menus} bsStyle="pills" stacked />

LeftMenu.propTypes = {
    menus: PropTypes.array
}

export default LeftMenu