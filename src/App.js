// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CDS from './pages/CDS';
import NDA from './pages/NDA';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UploadNotes from './pages/uploadNotes';
import ImageCarouselWithTimer from './pages/ppdt';
import Wat from './pages/Wat';
import PersonalInterview from './pages/PersonalInterview';
import Srt from './pages/Srt';
import Eligible from './pages/eligible';
import Maths from './pages/maths';
import GK from './pages/gk';
import English from './pages/english';
import NdaMath from './pages/ndamaths';
import NdaEng from './pages/ndaeng';
import NdaGK from './pages/ndagk';
import NdaEligi from './pages/ndaeligibility';


const App = () => {
  return (
    
    <Router>
      <Routes future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Route path="/" element={<HomePage />} />
        <Route path="/CDS" element={<CDS />} />
        <Route path="/NDA" element={<NDA />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<UploadNotes/>} />
        <Route path="/ppdt" element={<ImageCarouselWithTimer/>} />
        <Route path="/wat" element={<Wat/>} />
        <Route path="/personal-interview" element={<PersonalInterview />} />
        <Route path="/SRT" element={<Srt/>} />
        <Route path="/eligible" element={<Eligible/>} />
        <Route path="/maths" element={<Maths/>} />
        <Route path="/gk" element={<GK/>} />
        <Route path="/english" element={<English/>} />
        <Route path="/ndamaths" element={<NdaMath/>} />
        <Route path="/ndaeng" element={<NdaEng/>} />
        <Route path="/ndagk" element={<NdaGK/>} />
        <Route path="/ndaeligibility" element={<NdaEligi/>} />
      </Routes>
    </Router>

  );
};

export default App;
