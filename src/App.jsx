import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Manufacturing from './pages/Manufacturing';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/machining" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;