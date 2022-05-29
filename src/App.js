import './App.css';
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Appis from './Appis';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Appis} exact /> 
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
