import React from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
}

const user = {
    firstName: 'Known',
    lastName: 'Chen'
}

const JsxApp = () => (
    <div>
        <h1>Hello, {formatName(user)}!</h1>
        {getGreeting()}
        {getGreeting(user)}
    </div>
)

export default JsxApp