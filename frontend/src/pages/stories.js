import React from 'react'
import VideoUploader from "../components/videoUploader";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/Footer"



const stories = () => {
  return (
    <div>
      <Navbar />
      <VideoUploader />

      <Footer />
    </div>
  );
}

export default stories
