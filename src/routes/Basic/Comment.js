import React, { Component } from 'react'

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

    formatDate(date) {
        return date.toString()
    }
}

const CommentApp = () => <Comment author="known" text="Hello World!" date={Date.now()} />

export default CommentApp