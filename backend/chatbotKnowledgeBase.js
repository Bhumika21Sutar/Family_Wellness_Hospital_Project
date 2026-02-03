// Chatbot Knowledge Base for Family Wellness Hospital
// Contains predefined questions and answers about hospital services, facilities, and general information

const knowledgeBase = [
  {
    question: "What are your hospital timings?",
    answer:
      "Our hospital operates 24/7 for emergency services. OPD timings are from 8:00 AM to 8:00 PM, Monday to Saturday. Sundays have special OPD timings from 9:00 AM to 2:00 PM.",
    keywords: ["timings", "hours", "operating hours", "open", "closed"],
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by calling our reception at +91-123-456-7890, using our online booking system on the website, or by visiting the hospital in person. Emergency cases are attended immediately without prior appointment.",
    keywords: ["book", "appointment", "schedule", "reserve"],
  },
  {
    question: "What services do you provide?",
    answer:
      "We offer a wide range of medical services including general medicine, surgery, pediatrics, gynecology, orthopedics, cardiology, neurology, dental care, and emergency services. We also have diagnostic facilities like X-ray, MRI, and laboratory services.",
    keywords: ["services", "departments", "facilities", "treatments"],
  },
  {
    question: "Do you have emergency services?",
    answer:
      "Yes, we provide 24-hour emergency medical services with fully equipped ambulances and emergency care facilities. Our emergency department is staffed with experienced doctors and nurses ready to handle all types of medical emergencies.",
    keywords: ["emergency", "ambulance", "emergency services", "24/7"],
  },
  {
    question: "What is your address?",
    answer:
      "Family Wellness Hospital is located at 123 Health Care Avenue, Medical District, Pune, Maharashtra 411001, India. You can find us on Google Maps for directions.",
    keywords: ["address", "location", "where are you", "map"],
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach us at: Phone: +91-123-456-7890 (24/7), Email: info@familywellnesshospital.com, or through our website's contact form.",
    keywords: ["contact", "phone", "email", "reach"],
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major health insurance plans. Please check with your insurance provider to confirm coverage or contact our billing department for more information.",
    keywords: ["insurance", "payment", "billing", "coverage"],
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, debit cards, credit cards (Visa, Mastercard, Amex), net banking, and most major health insurance plans. Online payment options are also available for appointments and bills.",
    keywords: ["payment", "methods", "cash", "card", "online"],
  },
  {
    question: "Do you have a pharmacy?",
    answer:
      "Yes, we have a 24-hour in-house pharmacy that provides prescription medications and over-the-counter drugs. Our pharmacy is staffed with experienced pharmacists to assist you.",
    keywords: ["pharmacy", "medication", "prescription", "drugs"],
  },
  {
    question: "What is the visiting hours for patients?",
    answer:
      "General visiting hours are from 10:00 AM to 12:00 PM and 4:00 PM to 6:00 PM. ICU visiting hours are restricted to 15 minutes per patient, twice a day. Please check with the nursing station for specific ward timings.",
    keywords: ["visiting", "hours", "visitors", "patient visit"],
  },
  {
    question: "Do you provide home healthcare services?",
    answer:
      "Yes, we offer home healthcare services including nurse visits, doctor consultations, physiotherapy, and medical equipment rentals. Please contact our home healthcare department for more details.",
    keywords: ["home", "healthcare", "home care", "nurse visit"],
  },
  {
    question: "How do I get my medical records?",
    answer:
      "You can request your medical records by visiting the hospital's medical records department during working hours. You will need to fill out a request form and provide valid identification. We can also email records to you upon request.",
    keywords: ["medical", "records", "documents", "reports"],
  },
  {
    question: "Do you have pediatric services?",
    answer:
      "Yes, we have a dedicated pediatric department with experienced pediatricians and specialized nurses. We provide comprehensive healthcare for children from birth to adolescence, including vaccinations and emergency care.",
    keywords: ["pediatric", "children", "child", "pediatrics", "vaccination"],
  },
  {
    question: "What is the emergency contact number?",
    answer:
      "For emergencies, please call our 24-hour emergency helpline: +91-123-456-7891. Our ambulances are available for emergency transport 24/7.",
    keywords: ["emergency", "contact", "helpline", "ambulance number"],
  },
  {
    question: "Do you offer health checkup packages?",
    answer:
      "Yes, we provide various health checkup packages tailored to different age groups and health conditions. These include basic checkups, executive health checks, and specialized packages for women and seniors. Contact our health checkup department for more information.",
    keywords: ["health", "checkup", "packages", "screening"],
  },
];

// Function to find the best matching answer based on user input
function findAnswer(userInput) {
  const input = userInput.toLowerCase().trim();

  // Check for exact or keyword matches
  for (let item of knowledgeBase) {
    // Check if input matches the question exactly or contains any of the keywords
    const matchesQuestion =
      item.question.toLowerCase().includes(input) ||
      input.includes(item.question.toLowerCase());
    const matchesKeywords = item.keywords.some((keyword) =>
      input.includes(keyword.toLowerCase()),
    );

    if (matchesQuestion || matchesKeywords) {
      return item.answer;
    }
  }

  // If no match found, return a default response
  return "I'm sorry, I don't have information about that. Please contact our hospital directly at +91-123-456-7890 for assistance, or visit our website for more information.";
}

export { knowledgeBase, findAnswer };
