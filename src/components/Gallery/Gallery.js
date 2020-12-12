import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { db } from "../../firebase";
import Loading from "../Loading/Loading";

function Gallery() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    db.collection("gallery").onSnapshot((snapshot) => {
      setImages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(images);

  return (
    <>
      {images ? (
        <div className="gallery">
          {images?.map((image) => (
            <div className="gallery__box">
              <div className="gallery__imageContainer">
                <img src={image.imgUrl} alt={image.destination} />
              </div>
              <div className="gallery__imageInfo">
                <h2>{image.destination}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Gallery;
