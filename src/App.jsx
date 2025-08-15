import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PhotoGallery from './components/PhotoGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
  
      <header className="bg-primary text-white py-3">
        <div className="container-fluid">
          <Header />
        </div>
      </header>

      <main className="container-fluid my-5">
        <Routes>
          <Route path="/" element={<PhotoGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-light text-center py-3 border-top">
        <div className="container-fluid">
          <Footer />
        </div>
      </footer>
    </Router>
  );
}

export default App;
