import twilio from "twilio";

// Demo credentials placeholders
const accountSid = "YOUR_ACCOUNT_SID";
const authToken = "YOUR_AUTH_TOKEN";

const client = twilio(accountSid, authToken);

// Sample OTP send
async function sendOtp() {
  try {
    const message = await client.messages.create({
      body: "Your AL Andalus verification code is 123456",
      from: "+1234567890", // Twilio number
      to: "+9876543210"    // Example customer number
    });

    console.log("Message sent:", message.sid);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

sendOtp();
