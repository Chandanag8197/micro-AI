import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-bg min-h-screen flex items-center justify-center px-4 py-12">
      <div className="contact-glass max-w-2xl w-full p-10 rounded-2xl shadow-xl">
        <h1 className="contact-title mb-2">Contact Us</h1>
        <p className="contact-subtitle mb-8">
          We'd love to hear from you! Fill out the form and our team will get back to you within 24 hours.
        </p>
        <form className="space-y-6">
          <div className="form-group">
            <input
              type="text"
              id="name"
              className="form-input peer"
              placeholder=" "
              required
            />
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="form-input peer"
              placeholder=" "
              required
            />
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              className="form-input peer"
              placeholder=" "
              required
            />
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              className="form-input peer h-32 resize-none"
              placeholder=" "
              required
            />
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
          </div>
          <button
            type="submit"
            className="contact-btn w-full py-3 rounded-lg font-semibold text-lg transition"
          >
            Send Message
          </button>
        </form>
        <div className="contact-info mt-10 text-center text-gray-600">
          <div>Email: <a href="mailto:chandanag760@gmail.com" className="contact-link">chandanag760@gmail.com</a></div>
          <div>Phone: <a href="tel:+91 8197805161" className="contact-link">+91 8197805161</a></div>
          <div>Address: 123 AI Avenue, Innovation City</div>
        </div>
      </div>
    </div>
  );
}