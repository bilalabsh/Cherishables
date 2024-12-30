import React, { useState } from "react";
import "../styles/order.css";
import Navbar2 from "../components/navbar2.tsx";

function Order() {
  const [buttonState, setButtonState] = useState("default");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted.");
    setButtonState("sending");

    const formData = {
      fullName: e.target.fullName.value,
      dob: e.target.dob.value,
      pob: e.target.pob.value,
      gender: e.target.gender.value,
      nationality: e.target.nationality.value,
      address: e.target.address.value,
      impression: e.target.impression.value,
      base: e.target.base.value,
      color: e.target.color.value,
      writingStyle: e.target.writingStyle.value,
      designNumber: e.target.designNumber.value,
      matterToWrite: e.target.matterToWrite.value,
    };

    console.log("Form data:", formData);

    try {
      console.log("Sending form data to server...");
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Received response from server.");
      console.log("Response status:", response.status);

      if (response.ok) {
        console.log("Form successfully submitted.");
        setButtonState("submitted");
      } else {
        const errorText = await response.text();
        console.error("Failed to submit form. Response text:", errorText);
        setButtonState("default");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
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
              <label>Date:</label>
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
                pattern="[0-9]{10}" // You can adjust the pattern based on your preferred mobile format
                title="Mobile number should be 10 digits"
              />
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
        <section></section>
      </div>
    </div>
  );
}

export default Order;
