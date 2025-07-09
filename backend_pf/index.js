import express from 'express'
import cors from "cors"
import nodemailer from "nodemailer"

const FRONTEND_URL = "http://localhost:5173"; 

const app = express()
app.use(cors({
    origin: FRONTEND_URL, // Specify frontend origin
    credentials: true // Allow cookies and authentication headers
}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", FRONTEND_URL);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post("/api/submit", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try{
    // const token = generateEmailToken()  
    const emailSender = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "iremember584@gmail.com",
            pass: "xtuu zmjh rrxx oebp"
        }
    })
    const mailOptions = {
        from: email,
        to: "mintlordettah@gmail.com",
        subject: `${name} Is Messaging From Your Portfolio`,
        text: `${email} - ${message}`
    };
        emailSender.sendMail(mailOptions)

    }catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send verification email" });
    }

  console.log(`Success: ${name}, ${email}, ${message}`);
  res.status(200).json({ success: true, message: "Form submitted successfully!" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});