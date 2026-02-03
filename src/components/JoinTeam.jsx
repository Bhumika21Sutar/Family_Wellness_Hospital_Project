import React, { useState } from "react";
import "./JoinTeam.css";

const JoinTeam = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target); // ✅ collect all form fields + files

    try {
      const res = await fetch("http://localhost:5000/send-application", {
        method: "POST",
        body: formData, // ✅ must send as multipart/form-data
      }).then((res) => res.json());

      if (res.success) {
        alert("✅ Your application has been submitted successfully!");
        togglePopup();
      } else {
        alert("❌ Something went wrong, please try again!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Network error, please try again!");
    }

    setLoading(false);
  };

  return (
    <div className="join-team-wrapper">
      <a href="#!" className="btn btn-primary" onClick={togglePopup}>
        <i className="fas fa-briefcase"></i> View Career Opportunities
      </a>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="close-btn" onClick={togglePopup}>
              &times;
            </button>
            <h3>Join Our Team</h3>

            {/* ✅ Submits to your backend */}
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Full Name
                  <input type="text" name="name" required />
                </label>
                <label>
                  Village Name
                  <input type="text" name="village" required />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Mobile No
                  <input
                    type="tel"
                    name="mobile"
                    pattern="[0-9]{10}"
                    required
                  />
                </label>
                <label>
                  Mail ID
                  <input type="email" name="email" required />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Upload Resume
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </label>
                <label>
                  Upload Certificate
                  <input
                    type="file"
                    name="certificate"
                    accept=".pdf,.jpg,.png,.doc,.docx"
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinTeam;
