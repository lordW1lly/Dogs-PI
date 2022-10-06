import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FormBTS } from './components/Form/FormBts';

import Form from './components/Form/Form';
import DogDetail from './components/DogDetail/DogDetail';

import LandingComponent from './components/Landing/LandingPage';
import { Home } from './components/Home/Home';
import { FormPage } from './components/Form/FormPage';


function App() {
  return (
    <React.Fragment>

      <React.StrictMode>
        <Routes>

          <Route exact path="/" element={<LandingComponent />} />
          <Route path="/dogs" element={<Home />} />

          <Route path="/dogs/:id" element={<DogDetail />} />
          <Route exact path="/dog" element={<Form />} />
          <Route exact path="/dogB" element={<FormPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </React.StrictMode>
    </React.Fragment>
  );
}

export default App;
