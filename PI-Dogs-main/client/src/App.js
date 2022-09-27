import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import DogDetail from './components/DogDetail/DogDetail';
import HomeDogs from './components/Home/HomeDogs';
import LandingComponent from './components/Landing/LandingPage';
import { Home } from './components/Home/Home';


function App() {
  return (
    <React.Fragment>
          {/* <NavBar /> */}
          <React.StrictMode>
          <Routes>
            {/* <Route path="/dogs" component={NavBar}/> */} 
            <Route exact path="/" element={<LandingComponent/>} />
            <Route  path="/dogs" element={<HomeDogs/>} />
            <Route  path="/dogs2" element={<Home/>} />
            <Route path="/dogs/:id" element={<DogDetail/>} />
            <Route  exact path="/dog" element={<Form/>}/>
            <Route path="*" element={<HomeDogs/>}/>
          </Routes>
          </React.StrictMode>
      </React.Fragment>
  );
}

export default App;
