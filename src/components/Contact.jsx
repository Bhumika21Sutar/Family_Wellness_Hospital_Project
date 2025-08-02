import React from "react";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
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
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your message. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <section id="contact" className="contact">
      <form onSubmit={onSubmit}>
        <h2>
          Get In <span>Touch</span>{" "}
        </h2>

        <div className="input-row">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Patient Full Name"
              name="name"
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
              placeholder="Email"
              name="email"
              required
            />
          </div>
        </div>

        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Tell Us About your health Issues"
            required
          ></textarea>
        </div>

        <div className="button-container">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
