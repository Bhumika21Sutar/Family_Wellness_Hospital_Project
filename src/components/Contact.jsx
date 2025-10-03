// import React from "react";
// import Swal from "sweetalert2";
// import "./Contact.css";

// const Contact = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "814b3682-9eba-426a-af8b-3839fbb4aeb4");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       Swal.fire({
//         title: "Success!",
//         text: "Message sent successfully!",
//         icon: "success",
//       });
//     } else {
//       Swal.fire({
//         title: "Error!",
//         text: "There was an error sending your message. Please try again later.",
//         icon: "error",
//       });
//     }
//   };
//   return (
//     <section id="contact" className="contact">
//       <form onSubmit={onSubmit}>
//         <h2>
//           Get In <span>Touch</span>{" "}
//         </h2>

//         <div className="input-row">
//           <div className="input-box">
//             <label>Full Name</label>
//             <input
//               type="text"
//               className="field"
//               placeholder="Enter Patient Full Name"
//               name="name"
//               required
//             />
//           </div>

//           <div className="input-box">
//             <label>City Name</label>
//             <input
//               type="text"
//               className="field"
//               placeholder="Enter your City Name"
//               name="city"
//               required
//             />
//           </div>
//         </div>

//         <div className="input-row">
//           <div className="input-box">
//             <label>Phone Number</label>
//             <input
//               type="tel"
//               className="field"
//               placeholder="Enter your Phone Number"
//               name="phone"
//               required
//             />
//           </div>

//           <div className="input-box">
//             <label>Email Address</label>
//             <input
//               type="email"
//               className="field"
//               placeholder="Enter your Email Address"
//               name="email"
//               required
//             />
//           </div>
//         </div>
//         {/*
//         <div className="input-box message-box">
//           <label>Your Message</label>
//           <div className="message-wrapper">
//             <textarea
//               name="message"
//               className="field mess"
//               placeholder="Tell us about your health issues and Doctor prescription."
//               required
//             ></textarea>

//             <label htmlFor="documents" className="upload-btn">
//               Upload Documents
//             </label>
//             <input
//               type="file"
//               id="documents"
//               name="documents"
//               multiple
//               accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
//               hidden
//             />
//           </div>
//         </div> */}

//         <div className="input-box message-box">
//           <label>Your Message</label>
//           <div className="message-wrapper" style={{ position: "relative" }}>
//             <textarea
//               name="message"
//               className="field mess"
//               placeholder="Tell us about your health issues and Doctor prescription."
//               required
//             ></textarea>

//             {/* Upload Button inside message box */}
//             <button
//               type="button"
//               className="upload-btn"
//               onClick={() => document.getElementById("documents").click()}
//             >
//               Upload Documents
//             </button>
//             <input
//               type="file"
//               id="documents"
//               name="documents"
//               multiple
//               accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
//               hidden
//             />
//           </div>
//         </div>

//         <div className="button-container">
//           <button type="submit">Send Message</button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const [fileNames, setFileNames] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "814b3682-9eba-426a-af8b-3839fbb4aeb4");

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
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });

      // Clear the form
      event.target.reset();
      setFileNames([]);
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your message. Please try again later.",
        icon: "error",
      });
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFileNames(files.map((file) => file.name));
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
              name="Village"
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
              name="documents"
              multiple
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
              hidden
              onChange={handleFileChange}
            />
          </div>

          {/* Display selected file names */}
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
