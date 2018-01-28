import React, { Component } from 'react'
import {
    Form, FormGroup, ControlLabel, FormControl, HelpBlock,
    Grid, Row, Col,
    Button, Checkbox, Radio
} from 'react-bootstrap'

const TodoList = ({ items }) => (
    <ul>
        {items.map(item => <li key={item.id}>{JSON.stringify(item)}</li>)}
    </ul>
)

const FieldGroup = ({ id, validationState, label, help, ...props }) => (
    <FormGroup controlId={id} validationState={validationState}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
)

const AppForm = ({ onChange }) => (
    <Grid>
        <Row className="show-grid">
            <Col xs={4} md={4}>
                <FieldGroup id="Todo" type="text" label="事项"
                    help="至少需要输入5-10个字符。" placeholder="请输入TODO"
                    onChange={onChange}
                />
                <FieldGroup id="Email" type="email"
                    label="Email address" placeholder="Enter email"
                    onChange={onChange}
                />
                <FieldGroup id="File" type="file" label="File"
                    help="Example block-level help text here." onChange={onChange}
                />
                <Checkbox checked readOnly>Checkbox</Checkbox>
                <Radio checked readOnly>Radio</Radio>
                <FormGroup controlId="Select">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={onChange}>
                        <option value="select">select</option>
                        <option value="Banana">Banana</option>
                        <option value="Apple">Apple</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="SelectMultiple">
                    <ControlLabel>Multiple select</ControlLabel>
                    <FormControl componentClass="select" multiple onChange={onChange}>
                        <option value="select">select (multiple)</option>
                        <option value="Banana">Banana</option>
                        <option value="Apple">Apple</option>
                    </FormControl>
                </FormGroup>
            </Col>
            <Col xs={4} md={4}>
                <FieldGroup id="Text" label="Text" type="text"
                    placeholder="Enter text" onChange={onChange}
                />
                <FieldGroup id="Password" label="Password" type="password" />
                <FormGroup>
                    <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
                    <Checkbox inline>3</Checkbox>
                </FormGroup>
                <FormGroup>
                    <Radio name="radioGroup" inline>1</Radio>{' '}
                    <Radio name="radioGroup" inline>2</Radio>{' '}
                    <Radio name="radioGroup" inline>3</Radio>
                </FormGroup>
                <FormGroup controlId="Textarea">
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Static text</ControlLabel>
                    <FormControl.Static>email@example.com</FormControl.Static>
                </FormGroup>
            </Col>
        </Row>
    </Grid>
)

class App extends Component {
    state = {
        items: [],
        isLoading: false
    }

    getValidationState = () => {
        //const length = this.state.text.length;
        //if (length > 10) return 'success';
        //else if (length > 5) return 'warning';
        //else if (length > 0) return 'error';
        return null;
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.id
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ isLoading: true })

        const { items, isLoading, ...state } = this.state
        const newItem = {
            id: Date.now(),
            ...state
        }

        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            isLoading: false
        }))
    }

    render() {
        const { items, isLoading } = this.state
        return (
            <div>
                <h3>表单</h3>
                <TodoList items={items} />
                <Form>
                    <AppForm onChange={this.handleChange} />
                    <Button bsStyle="primary" disabled={isLoading} onClick={!isLoading ? this.handleSubmit : null}>
                        {isLoading ? '提交中...' : '提交'}
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App