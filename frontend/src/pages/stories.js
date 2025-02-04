import React from 'react'
import { Link } from "react-router-dom"; // Import Link
import VideoUploader from "../components/videoUploader";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/Footer"



const stories = () => {
  return (
    <div>
      <Navbar />
      <div className="scrolling-text">
        <p>
          Introducing in Pakistan, your family own hand and foot impressions in
          metal
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; Please contact us for your personalized impressions
        </p>
      </div>
      <Link to="/">
        <img
          src={require("../assets/lg.png")}
          alt="Cherishables"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            margin: "0 auto",
            cursor: "pointer",
            transition: "transform 0.1s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </Link>
      <VideoUploader />

      <Footer />
    </div>
  );
}

export default stories
