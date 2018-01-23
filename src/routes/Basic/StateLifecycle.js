import React, { Component } from 'react'

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends Component {
    state = { date: new Date() }

    tick() {
        this.setState({ date: new Date() })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <FormattedDate date={this.state.date} />
        )
    }
}

const App = () => (
    <div>
        <Clock />
        <Clock />
        <Clock />
    </div>
)

export default App