import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";
import { motion } from "framer-motion";

const Chatbot = () => {
  console.log("Chatbot component rendered");
  const [isOpen, setIsOpen] = useState(false); // start open
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "What are your timings?",
    "How to book an appointment?",
    "Do you have emergency services?",
    "What services do you provide?",
  ];

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        "Hello! 👋 Welcome to Family Wellness Hospital. How can I help you today?",
      );
    }
  }, [isOpen]);

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
    setIsTyping(false);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        sender: "user",
        timestamp: new Date(),
      },
    ]);
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    addUserMessage(text.trim());
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("https://family-wellness-hospital-project.onrender.com/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim() }),
      });

      const data = await res.json();

      setTimeout(() => {
        addBotMessage(
          data.message ||
            "Sorry, I couldn't understand that. Please try again.",
        );
      }, 600);
    } catch {
      addBotMessage("Server connection problem. Please try again later.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const formatTime = (date) =>
    `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

  return (
    <div className="chatbot-container">
      {/* Toggle Button */}
      {/* <button
        className={`chatbot-button ${isOpen ? "active" : ""}`}
        onClick={() => {
          console.log("Chatbot button clicked");
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "✕" : "💬"}
      </button> */}

      <motion.button
        className={`chatbot-button ${isOpen ? "active" : ""}`}
        onClick={() => {
          console.log("Chatbot button clicked");
          setIsOpen(!isOpen);
        }}
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? "✕" : "💬"}
      </motion.button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? "active" : ""}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-avatar">🏥</div>
          <div className="chatbot-title">
            <h3>Family Wellness Assistant</h3>
            <p>Online</p>
          </div>
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <div className="message-avatar">
                {msg.sender === "bot" ? "🏥" : "👤"}
              </div>
              <div className="message-content">
                {msg.text}
                <div className="message-time">{formatTime(msg.timestamp)}</div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message bot">
              <div className="message-avatar">🏥</div>
              <div className="message-content typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {!isTyping && messages.length < 3 && (
          <div className="chatbot-suggestions">
            {quickQuestions.slice(0, 3).map((q, i) => (
              <div
                key={i}
                className="suggestion"
                onClick={() => sendMessage(q)}
              >
                {q}
              </div>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chatbot-input-container">
          <form onSubmit={handleSubmit} className="chatbot-input-wrapper">
            <textarea
              className="chatbot-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              rows={1}
              disabled={isTyping}
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={!inputValue.trim()}
            >
              ➤
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
