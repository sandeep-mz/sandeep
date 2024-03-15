import React, { useState, useRef } from "react";
import "../../style/contact.css"; // Adjust the path as needed
import contact from "../../images/contact.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_b96uk12", "template_g6rb881", form.current, {
        publicKey: "WHPQ2oZFGiMkjaM8i",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="cont-container">
      <div className="contact-image">
        <img src={contact} alt="contact image" />
      </div>
      <div className="contact-form">
        <div className="contact-text">
          <h1>Contact Us </h1>
          <p>
            Let’s connect: we’re here to help, and we’d love to hear from you!
            Whether you have a question, comment, or just want to chat, you can
            reach out to us through the contact form of this page, or by phone,
            email, or social media.
          </p>
        </div>

        <div className="top_btn">
          <button class="button-23" role="button">
            <a href="mailto:10millionvibration@gmail.com?subject=Contact%20With sandeep&body=Type Your%20Message">
              Send via Email
            </a>
          </button>
          <button class="button-23" role="button">
            <a href="tel:+918433384179">Call me</a>
          </button>
        </div>

        {submitted ? (
          <div className="submission-message">
            <p>Thank you for contacting us! We'll get back to you soon.</p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="text">Message</label>
              <textarea
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div>
              <button className="button-70" type="submit" value="Send">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
