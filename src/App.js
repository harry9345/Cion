import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {Navigation} from './components/Navigation';
import {Jumbotron} from  './components/Jumbotron';



class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Navigation />
       <Jumbotron />
       
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/"component={Home} />
              <Route  path='/About'component={About} />
              <Route  path="/Contact"component={Contact} />
              <Route  component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
}
}

export default App;
