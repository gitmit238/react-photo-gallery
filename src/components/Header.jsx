import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">🖼️ PhotoGallery</h1>
        <nav>
          <a href="#" className="text-white text-decoration-none me-3">Home</a>
          <a href="#" className="text-white text-decoration-none">About</a>
        </nav>
      </div>
    </header>
  );
}
