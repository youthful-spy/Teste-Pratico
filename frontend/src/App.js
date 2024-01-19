import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AutorLivro from './pages/AutorLivro';
import AddAutor from './pages/AddAutor';
import Edits from './pages/Edits';
import Delets from './pages/Delets';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AutorLivro/>}/>
        <Route path="AddAutor" element={<AddAutor/>}/>
        <Route path="/Edit/:id" element={<Edits/>}/>
        <Route path="/delets/:id" element={<Delets/>} />
      </Routes>
    </Router>
  );
}

export default App;
