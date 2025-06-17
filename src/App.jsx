import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantList from './components/PlantList';
import PlantDetail from './components/PlantDetail';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200">
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<PlantList />} />
            <Route path="/plant/:id" element={<PlantDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 