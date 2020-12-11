import React, { useState } from "react";
import { db } from "../../firebase";
import "./Add.css";

function Add() {
  const [name, setName] = useState("");
  const [camelName, setCamelName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [mapImg, setMapImg] = useState("");

  const handleSubmit = () => {
    db.collection("destinations").add({
      name,
      camelName,
      description,
      img,
      mapImg,
    });
    setName("");
    setCamelName("");
    setDescription("");
    setImg("");
    setMapImg("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <br />
      <input
        type="text"
        value={camelName}
        onChange={(e) => setCamelName(e.target.value)}
        placeholder="camelName"
      />
      <br />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <br />
      <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="img"
      />
      <br />
      <input
        type="text"
        value={mapImg}
        onChange={(e) => setMapImg(e.target.value)}
        placeholder="mapImg"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Add;
