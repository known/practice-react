import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

function ActionLink() {
    function handleClick(e) {
        e.preventDefault()
        alert('The link was clicked.')
    }

    return (
        <a href="" onClick={handleClick}>
            Click Me
        </a>
    )
}

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

class LoggingButton extends Component {
    //This syntax ensures `this` is bound within handleClick.
    handleClick = () => {
        console.log('this is:', this)
    }

    render() {
        return (
            <Button bsStyle="success" onClick={this.handleClick}>Click Me</Button>
        )
    }
}

class DeleteButton extends Component {
    deleteRow = (id, e) => {
        console.log(id)
        console.log(e)
    }

    render() {
        const { data } = this.props
        return (
            <div>
                {data && data.map((id, i) => (
                    <div key={i}>
                        <span>{id} </span>
                        <Button
                            bsStyle="danger"
                            bsSize="xsmall"
                            style={{ marginTop: 5, marginRight: 5 }}
                            onClick={(e) => this.deleteRow(id, e)}
                        >
                            Delete
                        </Button>
                        <Button
                            bsStyle="danger"
                            bsSize="xsmall"
                            style={{ marginTop: 5 }}
                            onClick={this.deleteRow.bind(this, id)}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
        )
    }
}

const App = () => (
    <div>
        <ActionLink />
        <br /><br />
        <Toggle />
        <br /><br />
        <LoggingButton />
        <DeleteButton data={[1, 2, 3]} />
    </div>
)

export default App