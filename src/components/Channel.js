import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Bundle from '../components/Bundle'

class Channel extends Component {
    static propTypes = {
        location: PropTypes.object,
        history: PropTypes.object,
        match: PropTypes.shape({
            params: PropTypes.shape({
                channel: PropTypes.string
            })
        })
    }

    render() {
        const { history, location, match, match: { params: { channel } } } = this.props
        //if (!channels[channel]) {
        //    return <Redirect to="/" />
        //} else {
            return (
                <h1>{channel}</h1>
            )
        //}
    }
}

export default Channel