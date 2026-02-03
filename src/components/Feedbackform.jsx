// import React, { useState } from "react";
// import "./FeedbackForm.css";

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     rating: "",
//     message: "",
//   });

//   const [result, setResult] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission (Web3Forms integration)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("access_key", "5c83e84b-605d-49ce-98c1-63da0be11b70");
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("rating", formData.rating);
//     data.append("message", formData.message);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: data,
//     });

//     const resultData = await response.json();

//     if (resultData.success) {
//       setResult("✅ Thank you! Your feedback has been sent successfully.");
//       setSubmitted(true);
//       setFormData({
//         name: "",
//         email: "",
//         rating: "",
//         message: "",
//       });
//     } else {
//       setResult("❌ Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section id="feedback" className="feedback-section">
//       <div className="feedback-container">
//         <h2>We Value Your Feedback ❤️</h2>
//         <p>Please take a moment to share your experience with us.</p>

//         {submitted ? (
//           <div className="thank-you">
//             <h3>Thank you for your feedback!</h3>
//             <p>We appreciate your time and effort to help us improve.</p>
//             <p className="result-message">{result}</p>
//           </div>
//         ) : (
//           <form className="feedback-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your full name"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="rating">Rate Your Experience</label>
//               <select
//                 id="rating"
//                 name="rating"
//                 value={formData.rating}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Rating</option>
//                 <option value="5">⭐️⭐️⭐️⭐️⭐️ Excellent</option>
//                 <option value="4">⭐️⭐️⭐️⭐️ Good</option>
//                 <option value="3">⭐️⭐️⭐️ Average</option>
//                 <option value="2">⭐️⭐️ Poor</option>
//                 <option value="1">⭐️ Very Poor</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Your Feedback</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="4"
//                 placeholder="Tell us about your experience..."
//               ></textarea>
//             </div>

//             <button type="submit" className="submit-btn">
//               Submit Feedback
//             </button>

//             <p className="result-message">{result}</p>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FeedbackForm;

import React, { useState } from "react";
import "./Feedbackform.css";

const Feedbackform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    recommend: "",
    quality: "",
    communication: "",
    cleanliness: "",
    information: "",
    efficiency: "",
    improvement: "",
  });

  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("access_key", "5c83e84b-605d-49ce-98c1-63da0be11b70");
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const resultData = await response.json();
    if (resultData.success) {
      setResult("✅ Thank you! Your feedback has been sent successfully.");
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        gender: "",
        dob: "",
        recommend: "",
        quality: "",
        communication: "",
        cleanliness: "",
        information: "",
        efficiency: "",
        improvement: "",
      });
    } else {
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <h2>Patient Feedback Form❤️</h2>
        <p>
          Thank you for choosing our hospital. Please provide feedback so we can
          continue improving our services.
        </p>

        {submitted ? (
          <div className="thank-you">
            <h3>Thank you for your feedback❤️</h3>
            <p>We appreciate your time and effort to help us improve.</p>
            <p className="result-message">{result}</p>
          </div>
        ) : (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email or phone"
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="recommend-section">
              <label>
                How likely are you to recommend us to your friends and family?
              </label>
              <div className="radio-group">
                {[
                  "Never",
                  "Not very likely",
                  "Somewhat likely",
                  "Likely",
                  "Very likely",
                ].map((opt) => (
                  <label key={opt}>
                    <input
                      type="radio"
                      name="recommend"
                      value={opt}
                      onChange={handleChange}
                      required
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="rating-section">
              <label>
                Please rate your satisfaction with the hospital and services:
              </label>
              <table className="rating-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Very Dissatisfied</th>
                    <th>Dissatisfied</th>
                    <th>Neutral</th>
                    <th>Satisfied</th>
                    <th>Very Satisfied</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "quality", label: "Overall quality of care" },
                    {
                      name: "communication",
                      label: "Communication & clarity of info",
                    },
                    { name: "cleanliness", label: "Cleanliness & maintenance" },
                    {
                      name: "information",
                      label: "Information for diagnosis/treatment",
                    },
                    {
                      name: "efficiency",
                      label: "Efficiency of admission/discharge",
                    },
                  ].map((item) => (
                    <tr key={item.name}>
                      <td>{item.label}</td>
                      {[1, 2, 3, 4, 5].map((val) => (
                        <td key={val}>
                          <input
                            type="radio"
                            name={item.name}
                            value={val}
                            onChange={handleChange}
                            required
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="form-group">
              <label>Tell us how we can improve:</label>
              <textarea
                name="improvement"
                rows="4"
                value={formData.improvement}
                onChange={handleChange}
                placeholder="Write your feedback here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
            <p className="result-message">{result}</p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Feedbackform;
