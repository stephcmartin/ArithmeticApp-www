import React, { Component } from 'react';
import Questions from './Questions'
import CreateQuestion from './createQuestion'
import QuestionByID from './questionByID'
import Welcome from './welcome.js'
import Footer from './footer.js'
import { Route, Switch } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default class App extends Component {

  render() {
    return (
      <div>
 <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Nav className="navbar-nav mr-auto">
          <IndexLinkContainer to="/">
            <NavItem className="nav-link">Dashboard</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/questions">
            <NavItem className="nav-link">List of questions</NavItem>
          </LinkContainer>
          <LinkContainer to="/questions/new">
            <NavItem className="nav-link">Create new question</NavItem>
          </LinkContainer>
        </Nav>
        </Navbar>
        <Welcome />
          <Switch>
              <Route path="/questions/new" component={CreateQuestion} />
              <Route path="/questions" component={Questions} />
              <Route path="/questions/:id" component ={QuestionByID} />
          </Switch>
        <Footer />
      </div>
    );
  }
}
