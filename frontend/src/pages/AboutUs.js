import React from 'react';
import Navbar from "../components/navbar.tsx";
import Footer from "../components/Footer";
import "../styles/aboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us-container">
      
      <div className="about-us-content">
        <div className="text-section">
          <h1>Hi, we're Cherishables</h1>
          <p>
            Cherishables, born from family, love, and togetherness, is dedicated to preserving life's most beautiful moments. Since 2003, we've captured hand and foot impressions to symbolize the unbreakable bond of love. 
          </p>

          <h2>A Journey of Love and Resilience</h2>
          <p>
          Our journey began in 2003, preserving hand and foot impressions to symbolize the unbreakable bond of love. We never imagined that Mideast Medical Centre, one of Clifton's top hospitals, would be our first outlet. When we offered our brochures, owner Mr. Ghaffar Ghani was overjoyed—it was exactly what he'd been seeking. Soon, our impressions were showcased on every floor. From newborns' first days to life's milestones, we captured memories across all ages. However, when Mideast became Ocean Mall, new challenges led to the closure of Cherishables. But now, we're back, ready to spread love and joy once more
          </p>
          <h2>A Heartfelt Relaunch</h2>
          <p>
            We’re thrilled to relaunch and share love and happiness once again. A heartfelt thank you to our loyal clients, who send messages of joy, sharing how their children have grown and how those cherished impressions are even more loved today. To our new clients, your support and enthusiasm mean the world. We are the Cherishables Family, united by beautiful memories and beautiful people.
          </p>
        </div>

        
        <div className="image-section">
          <img src={require('../assets/logofinal.png')} alt="Cherishables Team" />
        </div>
    </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;