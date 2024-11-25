const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Ensure the frontend URL is specified here
  })
);
app.use(bodyParser.json());

// POST route to handle form data
app.post("/", async (req, res) => {
  console.log("Received request:", req.body); // Log request body
  const { formData } = req.body;

  // Email transport configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "umern.aws@gmail.com", // Your email
      pass: "sigg nqll invw qbie", // Your email password (use an App Password if using Gmail)
    },
  });

  // Email content
  const mailOptions = {
    from: "umern.aws@gmail.com",
    to: "umern.aws@gmail.com", // Recipient email
    subject: "New Order Receipt",
    text: `
      A new order has been submitted with the following details:

      Full Name: ${formData.fullName} ${formData.surname}
      Date of Birth: ${formData.dob}
      Place of Birth: ${formData.pob}
      Gender: ${formData.gender}
      Nationality: ${formData.nationality}
      Address: ${formData.address}

      Impression Details:
      - Impression: ${formData.impression}
      - Base: ${formData.base}
      - Color: ${formData.color}
      - Writing Style: ${formData.writingStyle}
      - Design Number: ${formData.designNumber}
      - Matter to Write: ${formData.matterToWrite}

      Thank you for your order!
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
