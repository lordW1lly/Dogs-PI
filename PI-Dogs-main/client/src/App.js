import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Form from './components/Form/Form';
import DogDetail from './components/DogDetail/DogDetail';

import LandingComponent from './components/Landing/LandingPage';
import { Home } from './components/Home/Home';


function App() {
  return (
    <React.Fragment>

      <React.StrictMode>
        <Routes>

          <Route exact path="/" element={<LandingComponent />} />
          <Route path="/dogs" element={<Home />} />

          <Route path="/dogs/:id" element={<DogDetail />} />
          <Route exact path="/dog" element={<Form />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </React.StrictMode>
    </React.Fragment>
  );
}

export default App;
