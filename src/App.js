import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import AppSidebar from './components/appsidebar'

class App extends Component {
  render() {    
    return (    
      <div className='fp-wrapper'>
          <AppSidebar />
            <div >
              <Main />
          </div>
      </div>
    );
  }
}

export default App;
