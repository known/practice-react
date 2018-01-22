import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

TodoList.propTypes = {
    items: PropTypes.array
}

const TodoList = ({ items }) => (
    <ul>
        {items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
)

class TodoApp extends Component {
    state = {
        items: [],
        isLoading: false,
        text: ''
    }

    getValidationState = () => {
        const length = this.state.text.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.text.length) {
            return
        }

        this.setState({ isLoading: true })

        const newItem = {
            id: Date.now(),
            text: this.state.text
        }

        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            isLoading: false
        }))
    }

    render() {
        const { items, text, isLoading } = this.state
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={items} />
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>事项</ControlLabel>
                        <FormControl
                            type="text"
                            value={text}
                            placeholder="请输入TODO"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>至少需要输入5-10个字符。</HelpBlock>
                    </FormGroup>
                    <Button
                        bsStyle="primary"
                        disabled={isLoading}
                        onClick={!isLoading ? this.handleSubmit : null}
                    >
                        {isLoading ? '提交中...' : 'Add #' + (items.length + 1)}
                    </Button>
                </form>
            </div>
        )
    }
}

export default TodoApp