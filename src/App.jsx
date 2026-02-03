import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // This was dulled...

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          {/* This line below is what "uses" the import and makes it bright again! */}
          <Route path="/" element={<HomePage />} /> 
          
          {/* ... your other routes ... */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;