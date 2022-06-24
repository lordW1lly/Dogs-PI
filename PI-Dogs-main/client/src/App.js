import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import DogDetail from './components/DogDetail/DogDetail';
import HomeDogs from './components/Home/HomeDogs';
import LandingComponent from './components/Landing/LandingPage';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <React.Fragment>
          <NavBar />
          <Switch>
            {/* <Route path="/dog" component={NavBar}/> */} 
            <Route exact path="/" component={LandingComponent} />
            <Route exact path="/dogs" component={HomeDogs} />
            <Route path="/dogs/:id" component={DogDetail} />
            <Route  exact path="/dog" component={Form}/>
            <Route path="*" component={HomeDogs}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
