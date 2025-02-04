import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Navbar from "../components/navbar.tsx";
import Footer from "../components/Footer";
import "../styles/aboutUs.css";

const AboutUs = () => {
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
      <div className="about-us-container">
        <Link to="/">
          {" "}
          {/* Wrap image inside Link */}
          <img
            src={require("../assets/lg.png")}
            alt="Cherishables"
            className="aboutus-logo"
          />
        </Link>
        <div className="about-us-content">
          <div className="text-section">
            <div className="text-section-upper">
              <h1>Hi, we're Cherishables</h1>
              <p>
                Cherishables, born from family, love, and togetherness, is
                dedicated to preserving life's most beautiful moments. Since
                2003, we've captured hand and foot impressions to symbolize the
                unbreakable bond of love.
              </p>
              <div className="video-container">
                <video
                  controls
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                >
                  <source
                    src="https://res.cloudinary.com/dqeakzmb5/video/upload/v1735826245/Snapinsta.app_video_8546D61B807673A3EEB85E1D38F6F0BF_video_dashinit_icjvwo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <h2>Our Journey of Love</h2>
            <p>
              Our journey began in 2003, preserving hand and foot impressions in
              metal, which are unbreakable symbolizing the unbreakable bond of
              love. We never imagined that Mideast Medical Centre, one of
              Clifton's top hospitals, would be our first outlet. When we
              offered our brochures, owner Mr. Abdul Ghaffar Jatoi was
              overjoyed—it was exactly what he'd been seeking. Soon, our
              impressions were showcased on every floor. From newborns' first
              days to life's milestones, we captured memories across all ages.
              However, when Mideast became Ocean Mall, new challenges led to the
              closure of Cherishables. But now, we're back, ready to spread love
              and joy once more.
            </p>

            <h2>A Heartfelt Relaunch</h2>
            <p>
              We’re thrilled to relaunch and share love and happiness once
              again. A heartfelt thank you to our old clients, who send messages
              of joy, sharing how their children have grown and how their little
              impressions are now so much more loved. To our new clients, your
              support and enthusiasm mean the world. We are the Cherishables
              Family, united by beautiful memories and beautiful people.
            </p>
          </div>

          <div className="media-section">
            {/* Image section remains in the same container */}
            <div className="image-section">
              <img
                src={require("../assets/logofinal.png")}
                alt="Cherishables Team"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
