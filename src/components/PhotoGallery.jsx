import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('nature');
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [searchInput, setSearchInput] = useState('nature');

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=12&page=${page}`, {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (page === 1) {
          setPhotos(data.photos);
        } else {
          setPhotos((prev) => [...prev, ...data.photos]);
        }
      });
  }, [query, page]);

  const handleSearch = () => {
    setQuery(searchInput.trim() || 'nature');
    setPage(1);
  };

  return (
    <main className="container my-5">

      <div className="mb-4 d-flex">
        <input
          className="form-control me-2"
          type="text"
          value={searchInput}
          placeholder="جستجو عکس..."
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="row">
        {photos.map((photo) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={photo.id}>
            <div
              className="card shadow-sm"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedPhoto(photo)}
              data-bs-toggle="modal"
              data-bs-target="#photoModal"
            >
              <img
                src={photo.src.medium}
                alt={photo.photographer}
                className="img-fluid rounded photo-card"
              />
              <div className="card-body p-2">
                <p className="card-text text-muted small mb-0">
                  Photo by{' '}
                  <a
                    href={photo.photographer_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {photo.photographer}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {photos.length > 0 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load More
          </button>
        </div>
      )}

      
      <div
        className="modal fade"
        id="photoModal"
        tabIndex="-1"
        aria-labelledby="photoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {selectedPhoto && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="photoModalLabel">
                    {selectedPhoto.photographer}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={selectedPhoto.src.large}
                    alt={selectedPhoto.photographer}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="modal-footer">
                  <a
                    href={selectedPhoto.src.original}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                  >
                     download
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
