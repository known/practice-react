import React, { Component } from 'react';

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <FormattedDate date={this.state.date} />
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
};
