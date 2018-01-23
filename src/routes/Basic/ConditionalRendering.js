import React, { Component } from 'react'
import { Button, Glyphicon, Badge, Alert } from 'react-bootstrap'

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

function LoginButton(props) {
    return (
        <Button bsStyle="primary" onClick={props.onClick}>
            Login
        </Button>
    )
}

function LogoutButton(props) {
    return (
        <Button bsStyle="danger" onClick={props.onClick}>
            Logout
        </Button>
    )
}

class LoginControl extends Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = { isLoggedIn: false }
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const { isLoggedIn } = this.state

        let button = null
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

//Inline If with Logical && Operator
function Mailbox(props) {
    const { unreadMessages } = props
    return (
        <div style={{ marginTop: 10 }}>
            <div style={{ fontSize: 18 }}>
                <Glyphicon glyph="envelope" />
                <Badge>{unreadMessages.length}</Badge>
            </div>
            <h1>Hello!</h1>
            {unreadMessages.length &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}

//Preventing Component from Rendering
function WarningBanner(props) {
    if (!props.warn) {
        return null
    }

    return (
        <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too	good.
        </Alert>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showWarning: true }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <Button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </Button>
            </div>
        )
    }
}

const unreadMessages = ['React', 'Re: React', 'Re:Re: React']

const App = () => (
    <div>
        <LoginControl />
        <Mailbox unreadMessages={unreadMessages} />
        <Page />
    </div>
)

export default App