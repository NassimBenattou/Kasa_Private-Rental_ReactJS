import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Appartement from './pages/Appartement';
import Error from './pages/Error';
import data from './data/data.json';

function App() {

  const [id, setId] = useState('');

  useEffect(() => {

   

  });

  const getId = (id) => { 

    setId(id);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil handleCallback={getId} />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/appartement/:id" element={<Appartement to={id} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
