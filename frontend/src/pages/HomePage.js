import Navbar from "../components/navbar.tsx";
import ProductCatalog from "../components/catalog";
import Footer from "../components/Footer";
import "../styles/homepage.css";
import "../styles/aboutUs.css";
import VideoUploader from "../components/videoUploader";
import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <div>
      <div className="homepage">
        <Navbar />
        <div className="scrolling-text">
          <p>Please contact us for your personalized impressions</p>
        </div>
        <section className="hero-section">
          <ProductCatalog />
        </section>
        <section className="video-section">
          <VideoUploader />
        </section>
        <section className="container-section">
          <div className="about-us-container">
            <div className="about-us-content">
              <div className="text-section">
                <h1>Hi, we're Cherishables</h1>
                <p>
                  Cherishables, born from family, love, and togetherness, is
                  dedicated to preserving life's most beautiful moments. Since
                  2003, we've captured hand and foot impressions to symbolize
                  the unbreakable bond of love.
                </p>

                <h2>Our Journey of Love</h2>
                <p>
                  Our journey began in 2003, preserving hand and foot
                  impressions in metal, which are unbreakable symbolizing the
                  unbreakable bond of love. We never imagined that Mideast
                  Medical Centre, one of Clifton's top hospitals, would be our
                  first outlet. When we offered our brochures, owner Mr. Abdul
                  Ghaffar Jatoi was overjoyed—it was exactly what he'd been
                  seeking. Soon, our impressions were showcased on every floor.
                  From newborns' first days to life's milestones, we captured
                  memories across all ages. However, when Mideast became Ocean
                  Mall, new challenges led to the closure of Cherishables. But
                  now, we're back, ready to spread love and joy once more
                </p>
                <h2>A Heartfelt Relaunch</h2>
                <p>
                  We’re thrilled to relaunch and share love and happiness once
                  again. A heartfelt thank you to our old clients, who send
                  messages of joy, sharing how their children have grown and how
                  their little impressions are now so much more loved. To our
                  new clients, your support and enthusiasm mean the world. We
                  are the Cherishables Family, united by beautiful memories and
                  beautiful people.
                </p>
              </div>

              <div className="image-section">
                <img
                  src={require("../assets/logofinal.png")}
                  alt="Cherishables Team"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="category-controls">
            <Link to="/appointment" className="order-now-button">
              <span>Book Your Appointment !</span>
              <br />
              <small>~ Prices begin from Rs 9000 ~</small>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
