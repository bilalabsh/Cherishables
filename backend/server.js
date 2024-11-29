import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

console.log("Middleware configured.");

// Handle POST requests to "/"
app.post("/", async (req, res) => {
  console.log("Received POST request to '/' endpoint.");
  console.log("Request body:", req.body);

  try {
    const googleScriptURL =
      "https://script.google.com/macros/s/AKfycbwV7ycLmfQMT6rqO3jtOWEXjngHEGSjBWlaB1KSM9wRtlTYtiDucGkns_DRoArIJPlI/exec";

    console.log("Sending data to Google Apps Script at:", googleScriptURL);

    const response = await fetch(googleScriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    console.log("Received response from Google Apps Script.");
    console.log("Response status:", response.status);

    const data = await response.json();
    console.log("Response data:", data);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error in POST request handler:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

// Handle GET requests to "/"
app.get("/", (req, res) => {
  console.log("Received GET request to '/' endpoint.");
  res.status(200).send("Welcome to the CORS Proxy Server!");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`CORS Proxy server running at http://localhost:${PORT}`);
});
