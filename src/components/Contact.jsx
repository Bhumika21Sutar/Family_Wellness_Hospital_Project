import React, { useState } from "react";
import Swal from "sweetalert2";
import { QRCodeCanvas } from "qrcode.react";
import ReactDOMServer from "react-dom/server";
import "./Contact.css";

const Contact = () => {
  const [fileNames, setFileNames] = useState([]);
  const [files, setFiles] = useState([]); // store selected files

  // Handle file input
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFileNames(selectedFiles.map((file) => file.name));
    setFiles(selectedFiles);
  };

  // Form submit
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // ✅ Attach selected files
    files.forEach((file) => {
      formData.append("attachments", file, file.name);
    });

    // QR Code Step (before sending email)
    const qrHtml = ReactDOMServer.renderToString(
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: 10 }}>
          <QRCodeCanvas value="https://dummy-payment-url.com" size={200} />
        </div>
        <span>Scan to pay</span>
      </div>
    );

    const qrResult = await Swal.fire({
      title: "Payment Required",
      html: qrHtml,
      confirmButtonText: "I have paid",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      allowOutsideClick: false,
    });

    if (!qrResult.isConfirmed) {
      Swal.fire("Cancelled", "You did not complete the payment.", "error");
      return;
    }

    Swal.fire("Payment Successful!", "Thank you for your payment.", "success");

    // Show loading while sending email
    Swal.fire({
      title: "Sending Message...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch("https://family-wellness-hospital-project.onrender.com/send-contact", {
        method: "POST",
        body: formData, // ✅ multipart/form-data
      });

      const result = await res.json();
      Swal.close();

      if (result.success) {
        Swal.fire("Success!", "Message sent successfully!", "success");
        event.target.reset();
        setFileNames([]);
        setFiles([]);
      } else {
        Swal.fire(
          "Error!",
          result.message || "Failed to send message.",
          "error"
        );
      }
    } catch (err) {
      Swal.close();
      Swal.fire("Error!", "Network error. Please try again later.", "error");
    }
  };

  return (
    <section id="contact" className="contact">
      <form onSubmit={onSubmit}>
        <h2>
          Get In <span>Touch</span>
        </h2>

        <div className="input-row">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter Patient Full Name"
              name="name"
              required
            />
          </div>

          <div className="input-box">
            <label>Village Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your Village Name"
              name="village"
              required
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="tel"
              className="field"
              placeholder="Enter your Phone Number"
              name="phone"
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your Email Address"
              name="email"
              required
            />
          </div>
        </div>

        <div className="input-box message-box">
          <label>Your Message</label>
          <div className="message-wrapper" style={{ position: "relative" }}>
            <textarea
              name="message"
              className="field mess"
              placeholder="Tell us about your health issues and Doctor prescription."
              required
            ></textarea>

            <button
              type="button"
              className="upload-btn"
              onClick={() => document.getElementById("documents").click()}
            >
              Upload Documents
            </button>

            <input
              type="file"
              id="documents"
              name="attachments"
              multiple
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
              hidden
              onChange={handleFileChange}
            />
          </div>

          {fileNames.length > 0 && (
            <div className="file-names">
              <p>Selected Files:</p>
              <ul>
                {fileNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="button-container">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
