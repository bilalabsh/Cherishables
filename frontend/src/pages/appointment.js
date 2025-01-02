import React, { useState } from "react";
import "../styles/order.css";
import Navbar2 from "../components/navbar2.tsx";
import "flag-icons/css/flag-icons.min.css";
import countriesData from "../assets/countries.json";
import citiesData from "../assets/cities.json";

function Order() {
  const [cities, setCities] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1"); // Default country code
  const [buttonState, setButtonState] = useState("default");
  const [countrySearch, setCountrySearch] = useState(""); // State for search input

  // Update cities based on selected country
  const handleCountryChange = (e) => {
    const countryIso2 = e.target.value;

    // Find the full name of the country based on the selected ISO2 code
    const selectedCountry = countriesData.find(
      (country) => country.iso2 === countryIso2
    );

    // Filter cities for the selected country
    const filteredCities = citiesData.filter(
      (city) => city.country_code === countryIso2
    );
    setCities(filteredCities);

    // Update the country code
    setSelectedCountryCode(
      selectedCountry ? `+${selectedCountry.phone_code}` : "+1"
    );
  };

  // Handle phone number country code change
  const handlePhoneCodeChange = (e) => {
    setSelectedCountryCode(`+${e.target.value}`);
  };

  // Update search input for country
  const handleSearchChange = (e) => {
    setCountrySearch(e.target.value);
  };

  // Filter countries based on search input
  const filteredCountries = countriesData.filter((country) =>
    country.name.toLowerCase().startsWith(countrySearch.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonState("sending");

    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      mobileNumber: `${selectedCountryCode}${e.target.mobileNumber.value}`,
      dob: e.target.dob.value,
      city: e.target.city.value,
      country: countriesData.find(
        (country) => country.iso2 === e.target.country.value
      )?.name, // Save the full name of the country
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Search country"
                  value={countrySearch}
                  onChange={handleSearchChange}
                  style={{
                    marginBottom: "10px",
                    width: "100%",
                    padding: "8px",
                    fontSize: "16px",
                  }}
                />
                <select
                  name="phoneCode"
                  required
                  style={{
                    marginBottom: "10px",
                    width: "100%",
                    padding: "8px",
                  }}
                  onChange={handlePhoneCodeChange}
                >
                  {filteredCountries.map((country) => (
                    <option key={country.iso2} value={country.phone_code}>
                      +{country.phone_code} ({country.name})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="mobileNumber"
                  required
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{8,11}"
                  title="Mobile number should be 8 to 11 digits"
                  maxLength="11"
                  style={{ width: "100%", padding: "8px", fontSize: "16px" }}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Country:</label>
              <select
                name="country"
                required
                onChange={handleCountryChange}
                style={{ padding: "8px", fontSize: "16px" }}
              >
                <option value="">Select your country</option>
                {countriesData.map((country) => (
                  <option key={country.iso2} value={country.iso2}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>City:</label>
              <select
                name="city"
                required
                style={{ padding: "8px", fontSize: "16px" }}
              >
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
