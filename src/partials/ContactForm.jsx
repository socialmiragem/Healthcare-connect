import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mle69wr",   // ✅ your EmailJS Service ID
        "template_o8rjlth",  // ✅ your EmailJS Template ID
        form.current,
        "B24xQT8HS8W3GLOB0"  // ✅ your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("✅ Success:", result.text);
          alert("Message sent successfully!");
          form.current.reset(); // clear form after sending
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="row g-md-4 g-3">
      {/* Hidden time input */}
      <input type="hidden" name="time" value={new Date().toLocaleString()} />

      {/* Name */}
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="john doe"
          required
        />
      </div>

      {/* Email */}
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="johndoe@gmail.com"
          required
        />
      </div>

      {/* Phone */}
      <div className="col-md-6">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          id="phone"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Select */}
      <div className="col-md-6">
        <label htmlFor="option" className="form-label">Select an option</label>
        <select id="option" name="option" className="form-select" required>
          <option value="">select coverage type</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      {/* Message */}
      <div className="col-12">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          name="message"
          className="form-control"
          id="message"
          placeholder="Tell us about specific health needs or questions..."
          required
        ></textarea>
      </div>

      {/* Submit button */}
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-primary rounded-1 px-5 py-3 d-block mx-auto"
        >
          Start My Health Plan Today
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
