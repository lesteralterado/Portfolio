const express = require("express");
const cors = require("cors");
const axios = require('axios');
const bodyParser = require("body-parser");
const { Vonage } = require('@vonage/server-sdk');
// const { SMTPClient } = require('emailjs');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- Vonage Setup ---
const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

// --- EmailJS Setup ---
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const OWNER_PHONE = process.env.OWNER_PHONE; // e.g. '14155550123'
const OWNER_EMAIL = process.env.OWNER_EMAIL; // e.g. 'owner@email.com'

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required." });
  }

  // 1. Send SMS/WhatsApp via Vonage
  try {
    await vonage.sms.send({
      to: OWNER_PHONE,
      from: "Portfolio",
      text: `New message from:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
  } catch (err) {
    console.error("Vonage error:", err);
    // Optionally: return res.status(500).json({ error: "SMS failed." });
  }

  // 2. Send Email via EmailJS (SMTP)
  try {
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        message: message,
        to_email: OWNER_EMAIL, // If your template uses this variable
      },
    });
  } catch (err) {
    console.error("EmailJS error:", err);
    // Optionally: return res.status(500).json({ error: "Email failed." });
  }

  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on port 5000"));