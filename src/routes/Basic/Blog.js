import React, { Component } from 'react';

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

let blogStyle = {
    width: '100%'
}

let blogSiderStyle = {
    float: 'left',
    width: '30%'
}

let blogContentStyle = {
    float: 'left',
    width: '60%'
}

function Sider(props) {
    return (
        <ul style={blogSiderStyle}>
            {
                props.posts.map((post) => <SideItem post={post} />)
            }
        </ul>
    );
}

function SideItem(props) {
    return (
        <li id={props.post.id}>
            {props.post.title}
        </li>
    );
}

function Content(props) {
    return (
        <ul style={blogContentStyle}>
            {
                props.posts.map((post) => <ContentItem post={post} />)
            }
        </ul>
    );
}

function ContentItem(props) {
    return (
        <li id={props.post.id}>
            <h2>{props.post.title}</h2>
            <div>{props.post.content}</div>
        </li>
    );
}

export default class Blog extends Component {
    render() {
        return (
            <div style={blogStyle}>
                <Sider posts={this.props.posts} />
                <Content posts={this.props.posts} />
            </div>
        );
    }
}