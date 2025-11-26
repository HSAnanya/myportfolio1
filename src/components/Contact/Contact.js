import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { Typewriter } from 'react-simple-typewriter';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSending(true);

    try {
      await emailjs.send(
        "service_2kt6g76",          
        "template_57d3wnp", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "I_ioeU0ORt6URe1Rl"            
      );

    
      await emailjs.send(
        "service_2kt6g76",           
        "template_9q8355i", 
        {
          name: formData.name,
          email: formData.email,
        },
        "I_ioeU0ORt6URe1Rl"
      );

      setStatus("✅ Emails sent successfully!");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("❌ Failed to send email. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">
        <Typewriter
            words={['Contact']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           /> </h2>
      <h3 className="contact-subtitle">Mail Me</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Chat</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>

      {status && <p className="status mt-3">{status}</p>}
     
    </section>

  );
}
