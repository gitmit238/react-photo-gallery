import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <p className="mb-2">&copy; 2025 PhotoGallery | Powered by Pexels API</p>
      <div>
        <a href="#" className="text-light me-3">Instagram</a>
        <a href="#" className="text-light me-3">Twitter</a>
        <a href="#" className="text-light">GitHub</a>
      </div>
    </footer>
  );
}
