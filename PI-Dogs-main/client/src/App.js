import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import HomeDogs from './components/HomeDogs';
import NavBar from './components/NavBar';
import DogCreate from './components/DogCreate';
import DogDetail from './components/DogDetail';

function App() {
  return (
    <React.Fragment>
          <NavBar />
          {/* <Route exact path="/" component={Buscador} /> */}
          <Route exact path="/dogs" component={HomeDogs} />
          <Route path="/dogs/:id" component={DogDetail} />
          <Route path="/dog" component={DogCreate}/>
      </React.Fragment>
  );
}

export default App;
