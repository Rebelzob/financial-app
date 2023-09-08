import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchStocks } from './redux/stocks/stocksSlice';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import NavBar from './components/common/NavBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <Router>
      <body className="body-container">
        <NavBar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>
      </body>
    </Router>
  );
}

export default App;
