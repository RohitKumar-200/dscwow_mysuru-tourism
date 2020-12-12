import React, { useState } from "react";
import "./ImageUpload.css";
import { storage, db } from "../../firebase";
import firebase from "firebase";

function ImageUpload() {
  const user = JSON.parse(localStorage.getItem("mysuru-tourism-user"));
  const [destination, setDestination] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
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
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("images").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              destinationCamelName: destination,
              imgUrl: url,
              userEmail: user.email,
              userName: user.name,
            });
            setProgress(0);
            setDestination("");
            setImage(null);
          });
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
        <input
          type="text"
          placeholder="Enter your experience in this place"
          onChange={(event) => setContent(event.target.value)}
        />
        <input type="file" onChange={handleFileChange} />
        <progress value={progress} max="100" />
        <button onClick={handleImageUpload}>post</button>
      </div>
    </div>
  );
}

export default ImageUpload;
