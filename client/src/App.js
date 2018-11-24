import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './components/header';
import Reviews from './components/reviews/reviews';
import Salaries from './components/salaries/salaries';
import Interviews from './components/interviews/interviews';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
           <Header />
          <Col xs={12} md={12}>
            <div className="App">
              <Switch>
                <Route path="/interviews/" component={ Interviews } />
                <Route path="/reviews/" component={ Reviews } />
                <Route path="/salaries/" component={ Salaries } />
              </Switch>
            </div>
          </Col>
        </Row>
      </Grid>
      
    );
  }
}

export default App;
