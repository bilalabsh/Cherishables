import React, { useState } from "react";
import "../styles/order.css";

function Order() {
  const [buttonState, setButtonState] = useState("default"); // "default", "sending", or "submitted"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonState("sending");

    // Collect form data
    const formData = {
      fullName: e.target[0].value,
      surname: e.target[1].value,
      dob: e.target[2].value,
      pob: e.target[3].value,
      gender: e.target.gender.value,
      nationality: e.target[6].value,
      address: e.target[7].value,
      impression: e.target.impression.value,
      base: e.target.base.value,
      color: e.target.colour.value,
      writingStyle: e.target.writingStyle.value,
      designNumber: e.target[13].value,
      matterToWrite: e.target[14].value,
    };

    try {
      // Send data to the backend
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        setButtonState("submitted");
      } else {
        console.error("Error sending email");
        setButtonState("default");
      }
    } catch (error) {
      console.error(error);
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

        {/* Personal Information Section */}
        <section className="personal-info">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" required />
            <label>Surname:</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" required />
            <label>Place of Birth:</label>
            <input type="text" required />
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
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea required />
          </div>
        </section>

        {/* Impression Details Section */}
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
              <input type="radio" name="colour" value="Gold" required /> Gold
            </label>
            <label>
              <input type="radio" name="colour" value="Silver" required />{" "}
              Silver
            </label>
            <label>
              <input type="radio" name="colour" value="Bronze" required />{" "}
              Bronze
            </label>
            <label>
              <input type="radio" name="colour" value="Copper" required />{" "}
              Copper
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
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Matter to Write:</label>
            <textarea required />
          </div>
        </section>

        <div className="signatures">
          <div>
            <hr />
            <br/>
            <p>Customer Signature</p>
          </div>
          <div>
            <hr />
            <br/>
            <p>Cherishables Desk</p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`submit-button ${buttonState}`}
          disabled={buttonState !== "default"}
        >
          <span>
            {buttonState === "default" && "Submit"}
            {buttonState === "sending" && "Sending..."}
            {buttonState === "submitted" && "Submitted ✅"}
          </span>
        </button>
      </form>
    </div>
  );
}

export default Order;
