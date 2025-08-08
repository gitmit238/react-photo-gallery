import React, { useState, useEffect } from 'react';

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('nature');

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=12`, {
      headers: {
        Authorization: 'TNr9MAajgPcMfXLRlXO4k8vEC2B8A5O3jjnLbiBhO109KIu2fMuJ4GPI',
      },
    })
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos));
  }, [query]);

  return (
    <main className="container my-5">
      <div className="mb-4">
        <input
          className="form-control"
          type="text"
          placeholder="جستجو عکس..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setQuery(e.target.value);
            }
          }}
        />
      </div>
      <div className="row">
        {photos.map((photo) => (
          <div className="col-md-4 mb-4" key={photo.id}>
            <img
              src={photo.src.medium}
              alt={photo.photographer}
              className="img-fluid rounded"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
