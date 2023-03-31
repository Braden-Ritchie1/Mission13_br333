import React from 'react';
import './App.css';
import Home from './pages/HomePage';
import MovieList from './pages/Movies';
import Podcast from './pages/Podcast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

//the app function allows for the linking between pages with routes to all three pages
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="podcast" element={<Podcast />} />
            <Route path="movieList" element={<MovieList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
