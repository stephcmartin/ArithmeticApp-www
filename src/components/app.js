import React, { Component } from 'react';
import Questions from './Questions'
import CreateQuestion from './createQuestion'
import Welcome from './welcome.js'
import Footer from './footer.js'
import { Route, Switch } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <div>
        <Welcome />
        <Switch>
        
            <Route path="/questions/new" component={CreateQuestion} />
            <Route path="/questions" component={Questions} />
        
        </Switch>
        <Footer />
      </div>
    );
  }
}
