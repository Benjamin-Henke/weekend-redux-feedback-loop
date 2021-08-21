import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// Import components
import HomePage from '../HomePage/HomePage'
import FeelingForm from '../FeelingForm/FeelingForm';
import ContentForm from '../ContentForm/ContentForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentForm from '../CommentForm/CommentForm';
import Review from '../Review/Review';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/feelingform" component={FeelingForm}></Route>
        <Route path="/contentform" component={ContentForm}></Route>
        <Route path="/supportform" component={SupportedForm}></Route>
        <Route path="/commentform" component={CommentForm}></Route>
        <Route path="/review" component={Review}></Route>
      </Router>
    </div>
  );
}

export default App;
