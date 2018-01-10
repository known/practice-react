import React, { Component } from 'react';

// const user = {
//     firstName: 'Known',
//     lastName: 'Chen'
// }

// Hello {this.formartUser(user)}!

export default class Hello extends Component {
    render() {
        return (
            <h1>
                <br />
                Hello, {this.props.name}!
            </h1>
        );
    }

    formartUser(user) {
        return user.firstName + ' ' + user.lastName
    }
};
