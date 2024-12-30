import Navbar from "../components/navbar.tsx";
import ProductCatalog from "../components/catalog";
import Footer from "../components/Footer";
import "../styles/homepage.css";

const HomePage = () => {

  return (
    <div className="homepage">
      <Navbar />
      <div className="scrolling-text">
        <p>Please contact us for your personalized impressions</p>
      </div>
      <section className="hero-section">
        <ProductCatalog />
      </section>
      
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
