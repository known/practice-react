import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import TopNav from './components/TopNav';
import Sider from './components/Sider';

export default class Layout extends Component {
    render() {
      return (
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React-Practice</a>
              </Navbar.Brand>
            </Navbar.Header>
            <TopNav />
          </Navbar>
          <Grid fluid="true">
            <Row className="show-grid">
              <Col className="App-sidebar" xs={12} sm={3} md={2}>
                <Sider />
              </Col>
              <Col xs={6} sm={9} md={10}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }