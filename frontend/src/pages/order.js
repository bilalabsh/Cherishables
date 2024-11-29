import React, { useState } from "react";
import "../styles/order.css";

function Order() {
  const [buttonState, setButtonState] = useState("default");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted.");
    setButtonState("sending");

    const formData = {
      fullName: e.target.fullName.value,
      surname: e.target.surname.value,
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
    <div className="form-container">
      <form className="order-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Cherishables</h1>
        <p className="subtitle">Impressive Impressions</p>
        <h2>Order Form</h2>
        <p className="tagline">
          Emotions cannot always be expressed but they can be preserved.
        </p>

        <section className="personal-info">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="fullName" required />
            <label>Surname:</label>
            <input type="text" name="surname" required />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="dob" required />
            <label>Place of Birth:</label>
            <input type="text" name="pob" required />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <label>
              <input type="radio" name="gender" value="Male" required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" required />{" "}
              Female
            </label>
          </div>
          <div className="form-group">
            <label>Nationality:</label>
            <input type="text" name="nationality" required />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea name="address" required />
          </div>
        </section>

        <section className="impression-details">
          <h3>Details of Personalised Impressions</h3>
          <div className="form-group">
            <label>Impression:</label>
            <label>
              <input type="radio" name="impression" value="Hand" required />{" "}
              Hand
            </label>
            <label>
              <input type="radio" name="impression" value="Foot" required />{" "}
              Foot
            </label>
            <label>
              <input type="radio" name="impression" value="Both" required />{" "}
              Both
            </label>
          </div>
          <div className="form-group">
            <label>Base:</label>
            <label>
              <input type="radio" name="base" value="Glass" required /> Glass
            </label>
            <label>
              <input type="radio" name="base" value="Marble" required /> Marble
            </label>
            <label>
              <input type="radio" name="base" value="Frame" required /> Frame
            </label>
            <label>
              <input type="radio" name="base" value="Wood" required /> Wood
            </label>
            <label>
              <input type="radio" name="base" value="Metal" required /> Metal
            </label>
          </div>
          <div className="form-group">
            <label>Colour:</label>
            <label>
              <input type="radio" name="color" value="Gold" required /> Gold
            </label>
            <label>
              <input type="radio" name="color" value="Silver" required /> Silver
            </label>
            <label>
              <input type="radio" name="color" value="Bronze" required /> Bronze
            </label>
            <label>
              <input type="radio" name="color" value="Copper" required /> Copper
            </label>
          </div>
          <div className="form-group">
            <label>Writing Style:</label>
            <label>
              <input
                type="radio"
                name="writingStyle"
                value="Calligraphy"
                required
              />{" "}
              Calligraphy
            </label>
            <label>
              <input
                type="radio"
                name="writingStyle"
                value="Brass Plate"
                required
              />{" "}
              Brass Plate
            </label>
            <label>
              <input
                type="radio"
                name="writingStyle"
                value="Steel Plate"
                required
              />{" "}
              Steel Plate
            </label>
          </div>
          <div className="form-group">
            <label>Design Number:</label>
            <input type="text" name="designNumber" required />
          </div>
          <div className="form-group">
            <label>Matter to Write:</label>
            <textarea name="matterToWrite" required />
          </div>
        </section>

        <div className="signatures">
          <div>
            <p>Customer Signature</p>
            <hr />
          </div>
          <div>
            <p>Cherishables Desk</p>
            <hr />
          </div>
        </div>

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
      <section>
      </section>
    </div>
  );
}

export default Order;
