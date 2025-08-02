import React from "react";
import "./MapLoc.css";

const Maploc = () => {
  return (
    <section className="contact-location">
      <div className="location-info">
        <h2>Get in Touch</h2>
        <p>
          <strong>Corporate Office:</strong> Jutha Aam More, Giridih Road
          Bharkatta,
          <br />
          Saranda, Jharkhand-825324
        </p>
        <p>
          <strong>Email:</strong> familywellnesshospital@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9892772233
        </p>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29108.533862493692!2d85.98439027536948!3d24.221949414464472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3f343f508b419%3A0x647028a7956fbc32!2sFAMILY%20WELLNESS%20HOSPITAL!5e0!3m2!1sen!2sin!4v1752505207824!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Maploc;
