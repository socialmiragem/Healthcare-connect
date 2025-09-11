import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // success | error | null

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   // your service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // your template ID
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // your public key
    )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="row g-md-4 g-3"
        id="contact_form"
      >
        {/* Name */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
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
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Select */}
        <div className="col-md-6">
          <label htmlFor="option" className="form-label">Select an option</label>
          <select name="option" className="form-select">
            <option value="">select coverage type</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {/* Textarea */}
        <div className="col-12">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
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

      {/* Status message */}
      {status === "success" && (
        <p className="text-success text-center mt-3">
          ✅ Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-danger text-center mt-3">
          ❌ Failed to send message. Please try again later.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
