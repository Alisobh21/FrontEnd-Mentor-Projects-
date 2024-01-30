import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(false);
    }, 10000);
  }, [done]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iomk33h",
        "template_tus1k5q",
        form.current,
        "Kcfh2AZHAp1jKYgkw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm();
    setDone(true);
  };
  return (
    <div className="contact">
      <div className="content contact-container">
        <div className="c-left">
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              id=""
              required
              cols="30"
              rows="6"
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.message)}
            ></textarea>
            <button>SEND MESSAGE</button>
            {done && <p className="done">Email sent successfully</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
