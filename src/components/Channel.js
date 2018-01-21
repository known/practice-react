import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import LeftMenu from './LeftMenu'
import Menus from '../routes/Menus'

const ChannelHome = ({ channel }) => (
    <h1>Please select a {channel.id}.</h1>
)

class Channel extends Component {
    static propTypes = {
        location: PropTypes.object,
        history: PropTypes.object,
        match: PropTypes.shape({
            params: PropTypes.shape({
                channelId: PropTypes.string
            })
        })
    }

    render() {
        const { match, match: { params: { channelId } } } = this.props
        const channel = Menus.find(c => c.id === channelId)

        if (!channel) {
            return <Redirect to="/" />
        } else {
            const menus = channel.menus
            return (
                <Grid>
                    <Row>
                        <Col md={3}>
                            <LeftMenu menus={menus} />
                        </Col>
                        <Col md={9}>
                            <Route exact path={match.url} render={() => <ChannelHome channel={channel} />} />
                            {menus && menus.map((menu, index) => (
                                <Route key={index} {...menu} />
                            ))}
                        </Col>
                    </Row>
                </Grid>
            )
        }
    }
}

export default Channel