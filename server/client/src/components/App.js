import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import FamilyTree from './FamilyTree';
import AddIndividual from './AddIndividual';


const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return(
      <div className='container'> 
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing}/>
            <Route path='/familyTree' component={FamilyTree} />
            <Route path='/members/new' component={AddIndividual} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);