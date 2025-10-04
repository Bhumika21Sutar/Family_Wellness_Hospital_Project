// import React from "react";
// import "./AreaOfFocus.css";

// const services = [
//   { name: "Main Services", id: "services" },
//   { name: "Our Team", id: "team" },
//   { name: "Paediatrics/Children's Health", id: "" },
//   { name: "Wellness & Prevention", id: "" },
//   { name: "Patient Stories", id: "" },
//   { name: "Emergency Services", id: "" },
//   { name: "Our Location/Community", id: "loc" },
//   { name: "Scheduling", id: "contact" },
//   { name: "Maternity/Women's Health", id: "" },
//   { name: "Strong Visuals", id: "up-services" },
// ];

// const AreaOfFocus = () => {
//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Duplicate array for seamless continuous scroll
//   const loopedServices = [...services, ...services];

//   return (
//     <div className="area-of-focus">
//       <h2 className="title">
//         Our <span className="highlight">Focus </span>Areas
//       </h2>

//       <div className="scroll-wrapper">
//         <div className="scrolling-container">
//           {loopedServices.map((service, index) => (
//             <button
//               key={index}
//               className="scroll-item"
//               onClick={() => handleScroll(service.id)}
//             >
//               {service.name}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AreaOfFocus;

// import React, { useState } from "react";
// import "./AreaOfFocus.css";

// const services = [
//   { name: "Main Services", id: "services" },
//   { name: "Our Team", id: "team" },
//   {
//     name: "Paediatrics/Children's Health",
//     id: "paediatrics",
//     popupImages: ["/assets/S1.png", "/assets/S2.png", "/assets/S3.png"],
//   },
//   {
//     name: "Wellness & Prevention",
//     id: "wellness",
//     popupImages: ["/assets/S4.png", "/assets/S5.png", "/assets/S6.png"],
//   },
//   {
//     name: "Patient Stories",
//     id: "stories",
//     popupImages: ["/assets/S7.png", "/assets/S8.png", "/assets/S9.png"],
//   },
//   {
//     name: "Emergency Services",
//     id: "emergency",
//     popupImages: ["/assets/S10.png", "/assets/S11.png", "/assets/S12.png"],
//   },
//   { name: "Our Location/Community", id: "loc" },
//   { name: "Scheduling", id: "contact" },
//   {
//     name: "Maternity/Women's Health",
//     id: "maternity",
//     popupImages: ["/assets/S13.png", "/assets/S14.png", "/assets/S15.png"],
//   },
//   { name: "Strong Visuals", id: "up-services" },
// ];

// const AreaOfFocus = () => {
//   const [openPopup, setOpenPopup] = useState(null);

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleOpenPopup = (service) => {
//     if (service.popupImages) {
//       setOpenPopup(service);
//     } else {
//       handleScroll(service.id);
//     }
//   };

//   const handleClosePopup = () => {
//     setOpenPopup(null);
//   };

//   return (
//     <div className="area-of-focus">
//       <h2 className="title">
//         Our <span className="highlight">Focus </span>Areas
//       </h2>

//       <div className="scroll-wrapper">
//         <div className="scrolling-container">
//           {services.map((service, index) => (
//             <button
//               key={index}
//               className="scroll-item"
//               onClick={() => handleOpenPopup(service)}
//             >
//               {service.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Popup */}
//       {/* {openPopup && (
//         <div className="popup-overlay" onClick={handleClosePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <h3>{openPopup.name}</h3>
//             <div className="popup-scrolling">
//               <div className="popup-scrolling-inner">
//                 {openPopup.popupImages.map((img, idx) => (
//                   <img key={idx} src={img} alt="" />
//                 ))}
//               </div>
//             </div>
//             <button className="close-btn" onClick={handleClosePopup}>
//               Close
//             </button>
//           </div>
//         </div>
//       )} */}

//       {openPopup && (
//         <div className="popup-overlay" onClick={handleClosePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={handleClosePopup}>
//               &times;
//             </button>
//             <h3>{openPopup.name}</h3>
//             <div className="popup-scrolling">
//               <div className="popup-scrolling-inner">
//                 {openPopup.popupImages.map((img, idx) => (
//                   <img key={idx} src={img} alt="" />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AreaOfFocus;

import React, { useState } from "react";
import "./AreaOfFocus.css";

const services = [
  { name: "Main Services", id: "services" },
  { name: "Our Team", id: "team" },
  {
    name: "Paediatrics/Children's Health",
    id: "paediatrics",
    popupImages: ["/assets/S1.png", "/assets/S2.png", "/assets/S3.png"],
  },
  {
    name: "Wellness & Prevention",
    id: "wellness",
    popupImages: ["/assets/S4.png", "/assets/S5.png", "/assets/S6.png"],
  },
  {
    name: "Patient Stories",
    id: "stories",
    popupImages: ["/assets/S7.png", "/assets/S8.png", "/assets/S9.png"],
  },
  {
    name: "Emergency Services",
    id: "emergency",
    popupImages: ["/assets/S10.png", "/assets/S11.png", "/assets/S12.png"],
  },
  { name: "Our Location/Community", id: "loc" },
  { name: "Scheduling", id: "contact" },
  {
    name: "Maternity/Women's Health",
    id: "maternity",
    popupImages: ["/assets/S13.png", "/assets/S14.png", "/assets/S15.png"],
  },
  { name: "Strong Visuals", id: "up-services" },
];

const AreaOfFocus = () => {
  const [openPopup, setOpenPopup] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenPopup = (service) => {
    if (service.popupImages) {
      setOpenPopup(service);
      setCurrentIndex(0);
    } else {
      handleScroll(service.id);
    }
  };

  const handleClosePopup = () => {
    setOpenPopup(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? openPopup.popupImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === openPopup.popupImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="area-of-focus">
      <h2 className="title">
        Our <span className="highlight">Focus </span>Areas
      </h2>

      <div className="scroll-wrapper">
        <div className="scrolling-container">
          {services.map((service, index) => (
            <button
              key={index}
              className="scroll-item"
              onClick={() => handleOpenPopup(service)}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>

      {/* Popup */}
      {openPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClosePopup}>
              &times;
            </button>
            <h3>{openPopup.name}</h3>
            <div className="popup-carousel">
              <button className="nav-btn left" onClick={prevImage}>
                &#10094;
              </button>
              <img
                src={openPopup.popupImages[currentIndex]}
                alt=""
                className="popup-image"
              />
              <button className="nav-btn right" onClick={nextImage}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AreaOfFocus;
