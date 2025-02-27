import React, { useState } from "react";
import "../styles/Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d",
      title: "Lions at Sunrise",
      description: "Majestic lions spotted during early morning safari",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1549366021-9f761d450615",
      title: "Maasai Mara Landscape",
      description: "Breathtaking views of the savannah",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      title: "Elephant Herd",
      description: "Family of elephants crossing the plains",
    },

    {
      id: 5,
      url: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580",
      title: "Cheetah Hunt",
      description: "Cheetah scanning for prey in the grasslands",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      title: "Zebra Migration",
      description: "Zebras during their annual migration",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1544867885-2333f61544ad",
      title: "Giraffe Family",
      description: "Giraffes grazing in the morning light",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d",
      title: "Safari Vehicle",
      description: "Our 4x4 vehicles ready for adventure",
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <p className="section-description">
          Capture the essence of Maasai Mara through our lens
        </p>

        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.title} />
              <div className="image-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <button className="view-btn">
                  <i className="fas fa-expand"></i> View Large
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.url} alt={selectedImage.title} />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
              <div className="modal-nav">
                <button className="nav-btn prev">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="nav-btn next">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
