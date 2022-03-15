import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <NavBar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
