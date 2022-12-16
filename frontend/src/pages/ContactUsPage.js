import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContactUsPage.css";


function ContactUsPage() {
    return (
        <div className="contact-us">
            <div className="contact-us-header">
                <h1>Contact Us</h1>
                <br/>
                <p>Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
            <form>
                <div className="contact-us-name">
                <label for="name">Name</label>
                <br />
                <input type="contact-us-name-text" id="name" name="name" />
                </div>
                <br />
                <div className="contact-us-email">
                <label for="email">Email</label>
                <br />
                <input type="contact-us-email-text" id="email" name="email" />
                </div>
                <br />
                <div className="contact-us-message">
                <label for="message">Message</label>
                <br />
                <input type="contact-us-message-text" id="message" name="message" />
                </div>
                <br />
                <div className = "contact-us-submit">
                <Link to="/">Submit</Link>
                </div>
            </form>
        </div>
    )
}

export default ContactUsPage;

