import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Fragment>

      <div className="App" style={{height: '85vh', backgroundColor: 'gray'}}>
        <Header/>
      </div>

      <footer style={{width: '100%', height: '15vh', backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       This is the page footer || doggo &copy; 2020 
      </footer>

    </Fragment>
  );
}

export default App;
