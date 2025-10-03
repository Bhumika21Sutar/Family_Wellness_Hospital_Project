// import React, { useState } from "react";
// import "./JoinTeam.css";

// const JoinTeam = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     village: "",
//     mobile: "",
//     email: "",
//     resume: null,
//     certificate: null,
//   });

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       document.body.style.overflow = "hidden"; // prevent background scroll
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     alert("Your application has been submitted!");
//     togglePopup();
//   };

//   return (
//     <div className="join-team-wrapper">
//       <a href="#!" className="btn btn-primary" onClick={togglePopup}>
//         <i className="fas fa-briefcase"></i> View Career Opportunities
//       </a>

//       {isOpen && (
//         <div className="popup-overlay">
//           <div className="popup-form">
//             <button className="close-btn" onClick={togglePopup}>
//               &times;
//             </button>
//             <h3>Join Our Team</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <label>
//                   Full Name
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   City Name
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.village}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//               </div>

//               <div className="form-row">
//                 <label>
//                   Mobile No
//                   <input
//                     type="tel"
//                     name="mobile"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     pattern="[0-9]{10}"
//                     required
//                   />
//                 </label>
//                 <label>
//                   Mail ID
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//               </div>

//               <div className="form-row">
//                 <label>
//                   Upload Resume
//                   <input
//                     type="file"
//                     name="resume"
//                     accept=".pdf,.doc,.docx"
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Upload Certificate
//                   <input
//                     type="file"
//                     name="certificate"
//                     accept=".pdf,.jpg,.png,.doc,.docx"
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//               </div>

//               <button type="submit" className="btn btn-submit">
//                 Submit Application
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JoinTeam;

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

    const formData = new FormData(e.target);
    formData.append("access_key", "814b3682-9eba-426a-af8b-3839fbb4aeb4"); // 🔑 replace with your Web3Forms access key

    try {
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
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

            {/* ✅ Web3Forms submission */}
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
