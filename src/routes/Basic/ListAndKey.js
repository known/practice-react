import React from 'react'

const ListItems = ({ number }) => (numbers.map((number) =>
    <li>{number}</li>
))

function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    )
    return (
        <ul>{listItems}</ul>
    )
}

function NumberListWithKey(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    )
    return (
        <ul>{listItems}</ul>
    )
}

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>
}

function NumberListWithItem(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
            value={number} />

    )
    return (
        <ul>
            {listItems}
        </ul>
    )
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const numbers = [1, 2, 3, 4, 5]
const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
]
const App = () => (
    <div>
        <ul>
            <ListItems number={numbers} />
        </ul>
        <NumberList numbers={numbers} />
        <NumberListWithKey numbers={numbers} />
        <NumberListWithItem numbers={numbers} />
        <Blog posts={posts} />
    </div>
)

export default App