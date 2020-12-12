import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124738.44715982598!2d76.5656492516725!3d12.310636832253756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1607757828030!5m2!1sen!2sin"
        className="map__iframe"
      ></iframe>
    </div>
  );
}

export default Map;
