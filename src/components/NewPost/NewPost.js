import React, { useState } from "react";
import "./NewPost.css";
import { storage, db } from "../../firebase";
import firebase from "firebase";

function NewPost() {
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
  const handleSubmit = () => {
    if (!image || content === "" || destination === "") {
      alert("please fill out inputs and select image to proceed!");
      return;
    }

    const imageName = Math.floor(Math.random() * 1000000) + image.name;
    const uploadTask = storage.ref(`images/${imageName}`).put(image);
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
          .child(imageName)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              authorEmail: user.email,
              authorName: user.name,
              authorPic: user.pic,
              content,
              destination,
              img: url,
            });

            db.collection("gallery").add({
              imgUrl: url,
              destination,
            });

            setProgress(0);
            setDestination("");
            setContent("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="newPost">
      <div className="newPost__container">
        {user ? (
          <>
            <input
              type="text"
              placeholder="Enter destination name"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            />
            <input
              type="text"
              value={content}
              placeholder="Enter your experience in this place"
              onChange={(event) => setContent(event.target.value)}
            />
            <input type="file" onChange={handleFileChange} />

            <button onClick={handleSubmit}>post</button>
            {progress > 0 ? <progress value={progress} max="100" /> : ""}
          </>
        ) : (
          "Please Login to post"
        )}
      </div>
    </div>
  );
}

export default NewPost;
