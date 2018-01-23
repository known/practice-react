import React, { Component } from 'react'

//Functional Component
function FuncWelcome(props) {
    return <h1>Hello, {props.name}</h1>
}

//Class Component
class ClsWelcome extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

//Extracting Components
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

class Comment extends Component {
    formatDate(date) {
        return new Date(date).toLocaleTimeString()
    }

    render() {
        return (
            <div className="comment">
                <UserInfo user={this.props.author} />
                <div className="comment-text">
                    {this.props.text}
                </div>
                <div className="comment-date">
                    {this.formatDate(this.props.date)}
                </div>
            </div>
        )
    }
}

//Composing Components
const App = () => (
    <div>
        <FuncWelcome name="known" />
        <ClsWelcome name="christina" />
        <Comment author="known" text="Hello World!" date={Date.now()} />
    </div>
)

export default App