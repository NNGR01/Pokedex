import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Pokemons from './Pokemons';
import './App.css';


ReactDOM.render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/pokemon/:id" element={<Pokemons />} />
  <Route path="*" element={<div>404 - not found</div>} />
</Routes>
</BrowserRouter>,
document.getElementById('root')
);

