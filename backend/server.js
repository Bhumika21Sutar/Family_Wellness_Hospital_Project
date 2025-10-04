import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());

// Multer config → keep files in memory for email attachments
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ✅ Nodemailer transporter (Gmail Example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bhumikasutar21@gmail.com",
    pass: "cypf rsbj iaza ijay",
  },
});

// ---------------- CONTACT FORM ----------------
app.post("/send-contact", upload.array("attachments"), async (req, res) => {
  try {
    const { name, email, phone, village, message } = req.body;

    // Convert uploaded files into attachments
    const attachments = req.files.map((file) => ({
      filename: file.originalname,
      content: file.buffer,
    }));

    // Email details
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "bhumikasutar21@gmail.com", // where you want to receive
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Village: ${village}
        Message: ${message}
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Contact form email sent!" });
  } catch (error) {
    console.error("Contact form error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send contact form" });
  }
});

// ---------------- JOIN TEAM FORM ----------------
app.post(
  "/send-application",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "certificate", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { name, email, mobile, village } = req.body;

      const attachments = [];
      if (req.files.resume) {
        attachments.push({
          filename: req.files.resume[0].originalname,
          content: req.files.resume[0].buffer,
        });
      }
      if (req.files.certificate) {
        attachments.push({
          filename: req.files.certificate[0].originalname,
          content: req.files.certificate[0].buffer,
        });
      }

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "bhumikasutar21@gmail.com",
        subject: "New Team Application",
        text: `
          Name: ${name}
          Email: ${email}
          Mobile: ${mobile}
          Village: ${village}
        `,
        attachments: attachments,
      };

      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Application email sent!" });
    } catch (error) {
      console.error("Application form error:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send application" });
    }
  }
);

// ---------------- START SERVER ----------------
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
