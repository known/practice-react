import React from 'react'

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div>Imagine a {props.color} datepicker here.</div>
    }
}

function BlueDatePicker() {
    return <MyComponents.DatePicker color="blue" />
}

// Correct! This is a component and should be capitalized:
function Hello(props) {
    // Correct! This use of <div> is legitimate because div is a valid HTML tag:
    return <div>Hello {props.toWhat}</div>
}

function HelloWorld() {
    // Correct! React knows <Hello /> is a component because it's capitalized.
    return <Hello toWhat="World" />
}

//const components = {
//    photo: <h1>PhotoStory</h1>,
//    video: <h1>VideoStory</h1>
//}

///function Story(props) {
//    // Correct! JSX type can be a capitalized variable.
//    const SpecificStory = components[props.storyType]
//    return <SpecificStory story={props.story} />
//}

function NumberDescriber(props) {
    let description
    if (props.number % 2 === 0) {
        description = <strong>even</strong>
    } else {
        description = <i>odd</i>
    }
    return <div>{props.number} is an {description} number</div>
}

const MyComponent = ({ message }) => (
    <div>
        {message}
    </div>
)

const Greeting = ({ firstName, lastName }) => (
    <div>
        {firstName} {lastName}
    </div>
)

function App1() {
    return <Greeting firstName="Ben" lastName="Hector" />
}

function App2() {
    const props = { firstName: 'Ben', lastName: 'Hector' }
    return <Greeting {...props} />
}

const Button = props => {
    const { kind, ...other } = props
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton"
    return <button className={className} {...other} />
}

function List() {
    return [
        // Don't forget the keys :)
        <li key="A">First item</li>,
        <li key="B">Second item</li>,
        <li key="C">Third item</li>,
    ]
}

function Item(props) {
    return <li>{props.message}</li>
}

function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review']
    return (
        <ul>
            {todos.map((message) => <Item key={message} message={message} />)}
        </ul>
    )
}

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
    let items = []
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i))
    }
    return <div>{items}</div>
}

function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    )
}

const MessageList = ({ messages }) => (
    messages.map((message) => <div>{message}</div>)
)

const myVariable = <h1>Hello</h1>
const showHeader = true
const messages = ['Hello', 'Hi']

const App = () => (
    <div>
        <BlueDatePicker />
        <HelloWorld />
        <NumberDescriber number={9} />
        <NumberDescriber number={10} />
        <MyComponent message={1 + 2 + 3 + 4} />
        <MyComponent message="hello world" />
        <MyComponent message={'hello world'} />
        <MyComponent message="&lt;3" />
        <MyComponent message={'<3'} />
        <App1 />
        <App2 />
        <Button kind="primary" onClick={() => console.log("clicked!")}>
            Hello World!
        </Button>
        <ul><List /></ul>
        <TodoList />
        <ListOfTenThings />
        <div />
        <div></div>
        <div>{false}</div>
        <div>{null}</div>
        <div>{undefined}</div>
        <div>{true}</div>
        <div>
            My JavaScript variable is {String(myVariable)}.
        </div>
        <div>
            {showHeader && <h1>Header</h1>}
            <h1>Content</h1>
        </div>
        <div>
            {messages.length &&
                <MessageList messages={messages} />
            }
        </div>
        <div>
            {messages.length > 0 &&
                <MessageList messages={messages} />
            }
        </div>
    </div>
)

export default App