import React, { useState } from "react";
import "./ImageUpload.css";
import { storage, db } from "../../firebase";

function ImageUpload() {
  const user = JSON.parse(localStorage.getItem("mysuru-tourism-user"));
  const [destination, setDestination] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleImageUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage.ref("images").child(image.name).getDownloadURL();
      }
    );
  };

  return (
    <div className="imageUpload">
      <div className="imageUpload__container">
        <input
          type="text"
          placeholder="Enter destination name"
          onChange={(event) => setDestination(event.target.value)}
        />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleImageUpload}>Upload</button>
      </div>
    </div>
  );
}

export default ImageUpload;
