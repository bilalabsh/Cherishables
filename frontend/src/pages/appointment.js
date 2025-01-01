import React, { useState } from "react";
import "../styles/order.css";
import Navbar2 from "../components/navbar2.tsx";
import "flag-icons/css/flag-icons.min.css";
import countriesData from "../assets/countries.json";
import citiesData from "../assets/cities.json";

function Order() {
  const [cities, setCities] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [buttonState, setButtonState] = useState("default");

  // Update cities based on selected country
  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountryCode(countryCode);

    // Filter cities for the selected country
    const filteredCities = citiesData.filter(
      (city) => city.country_code === countryCode
    );
    setCities(filteredCities);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonState("sending");

    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      mobileNumber: e.target.mobileNumber.value,
      dob: e.target.dob.value,
      city: e.target.city.value,
      country: e.target.country.value,
    };

    try {
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setButtonState("submitted");
      } else {
        setButtonState("default");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setButtonState("default");
    }
  };

  return (
    <div className="orderContainer">
      <Navbar2 />
      <div className="form-container">
        <form className="order-form" onSubmit={handleSubmit}>
          <h1 className="form-title">Cherishables</h1>
          <p className="subtitle">Impressive Impressions</p>
          <h2>Appointment Form</h2>
          <p className="tagline">
            Emotions cannot always be expressed but they can be preserved.
          </p>

          <section className="personal-info">
            <h3>Personal Information</h3>

            <div className="form-group">
              <label>Date of Birth:</label>
              <input type="date" name="dob" required />
            </div>

            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Enter full name"
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                type="tel"
                name="mobileNumber"
                required
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                title="Mobile number should be 10 digits"
              />
            </div>

            <div className="form-group">
              <label>Country:</label>
              <select name="country" required onChange={handleCountryChange}>
                <option value="">Select your country</option>
                {countriesData.map((country) => (
                  <option key={country.iso2} value={country.iso2}>
                    {country.name}{" "}
                    <span
                      className={`flag-icon flag-icon-${country.iso2.toLowerCase()}`}
                    />
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>City:</label>
              <select name="city" required>
                <option value="">Select your city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <button
            type="submit"
            className={`submit-button ${buttonState}`}
            disabled={buttonState !== "default"}
          >
            {buttonState === "default" && "Submit"}
            {buttonState === "sending" && "Sending..."}
            {buttonState === "submitted" && "Submitted ✅"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Order;
