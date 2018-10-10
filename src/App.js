import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Login from './components/Login';
import  Header from './components/Header';
import  MainPage from './components/MainPage';
import  PostDesc from './components/PostDesc';
import { BrowserRouter as Router , Route , Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
    
     
      <Router>
        <div>
        <Header/>
      <Route exact path="/" component={MainPage}/>
      <Route  path="/currentPost/:id" component={PostDesc}/>
     
       </div>
       </Router>
      </div>
    );
  }
}

export default App;
