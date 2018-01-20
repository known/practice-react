import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import Bundle from './Bundle'
import LeftNavbar from './LeftNavbar'
import Channels from '../routes/Channels'
import Hello from '../routes/Basic/Hello'

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
        const { history, location, match, match: { params: { channelId } } } = this.props
        const channel = Channels.find(c => c.id == channelId)

        if (!channel) {
            return <Redirect to="/" />
        } else {
            const menus = channel.menus
            return (
                <Grid>
                    <Row>
                        <Col md={3}>
                            <LeftNavbar menus={menus} />
                        </Col>
                        <Col md={9}>
                            <Route exact path={match.url} render={() => (
                                <h1>Please select a {channelId}.</h1>
                            )} />
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