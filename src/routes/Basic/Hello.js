import React, { Component } from 'react';

// const user = {
//     firstName: 'Known',
//     lastName: 'Chen'
// }

// Hello {this.formartUser(user)}!

class Hello extends Component {
    formartUser(user) {
        return user.firstName + ' ' + user.lastName
    }

    render() {
        return (
            <h1>Hello, {this.props.name}!</h1>
        )
    }
}

export default Hello