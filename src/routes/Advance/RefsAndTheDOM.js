import React, { Component } from 'react'

class CustomTextInput extends Component {
    constructor(props) {
        super(props)
        this.focusTextInput = this.focusTextInput.bind(this)
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus()
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => { this.textInput = input; }} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}

class AutoFocusTextInput extends Component {
    componentDidMount() {
        this.textInput.focusTextInput()
    }

    render() {
        return (
            <CustomTextInput
                ref={(input) => { this.textInput = input; }} />
        )
    }
}

function CustomTextInput1(props) {
    // textInput must be declared here so the ref callback can refer to it
    let textInput = null

    function handleClick() {
        textInput.focus()
    }

    return (
        <div>
            <input
                type="text"
                ref={(input) => { textInput = input; }} />
            <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            />
        </div>
    )
}

function CustomTextInput2(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    )
}

class Parent extends React.Component {
    render() {
        return (
            <CustomTextInput2
                inputRef={el => this.inputElement = el}
            />
        )
    }
}

function CustomTextInput3(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    )
}

function Parent1(props) {
    return (
        <div>
            My input: <CustomTextInput3 inputRef={props.inputRef} />
        </div>
    )
}


class Grandparent extends React.Component {
    render() {
        return (
            <Parent1
                inputRef={el => this.inputElement = el}
            />
        )
    }
}

const App = () => (
    <div>
        <CustomTextInput />
        <AutoFocusTextInput />
        <CustomTextInput1 />
        <Parent />
        <Grandparent />
    </div>
)

export default App