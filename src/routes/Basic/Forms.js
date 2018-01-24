import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    FormGroup, ControlLabel, FormControl, HelpBlock,
    Button, Checkbox, Radio
} from 'react-bootstrap'

const TodoList = ({ items }) => (
    <ul>
        {items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
)

TodoList.propTypes = {
    items: PropTypes.array
}

const FieldGroup = ({ id, label, help, ...props }) => (
    <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
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
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({ [name]: value })
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
                <h3>表单</h3>
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
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Text"
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FieldGroup
                        id="formControlsEmail"
                        type="email"
                        label="Email address"
                        placeholder="Enter email"
                    />
                    <FieldGroup id="formControlsPassword" label="Password" type="password" />
                    <FieldGroup
                        id="formControlsFile"
                        type="file"
                        label="File"
                        help="Example block-level help text here."
                    />
                    <Checkbox checked readOnly>Checkbox</Checkbox>
                    <Radio checked readOnly>Radio</Radio>
                    <FormGroup>
                        <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
                        <Checkbox inline>3</Checkbox>
                    </FormGroup>
                    <FormGroup>
                        <Radio name="radioGroup" inline>1</Radio>{' '}
                        <Radio name="radioGroup" inline>2</Radio>{' '}
                        <Radio name="radioGroup" inline>3</Radio>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelectMultiple">
                        <ControlLabel>Multiple select</ControlLabel>
                        <FormControl componentClass="select" multiple>
                            <option value="select">select (multiple)</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Textarea</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Static text</ControlLabel>
                        <FormControl.Static>email@example.com</FormControl.Static>
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