import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { AiFillPhone} from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      
      <h2>Contact Me</h2>
      <p>Get In Touch</p>
      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" aria-label="Email"/>
            <h4>Email</h4>
            <h5>bkemboi@gmail.com</h5>
            <a href="mailto:bkemboi@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" aria-label="Whatsapp"/>
            <h4>WhatsApp</h4>
            <h5>+254768353360</h5>
            <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

           <article className="contact__option">
            <AiFillPhone className="contact__option-icon" aria-label="" />
            <h4>Phone Call</h4>
            <h5>Kemboi</h5>
            <a href="https://kemboi.com" target="_blank" rel="noopener noreferrer">
              Call me
            </a>
          </article>

        </div>
        <form>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;