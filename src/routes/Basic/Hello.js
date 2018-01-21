import React, { Component } from 'react'

const user = {
    firstName: 'Known',
    lastName: 'Chen'
}

class Hello extends Component {
    formartUser(user) {
        return user.firstName + ' ' + user.lastName
    }

    render() {
        return (
            <h1>Hello, {this.formartUser(this.props.user)}!</h1>
        )
    }
}

const HelloApp = () => <Hello user={user} />

export default HelloApp