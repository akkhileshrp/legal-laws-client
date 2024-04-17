import React from "react";
import Navbar from "./Navbar";
import "../styles/Contact.css";
import backgroundImage from "../assets/backgrd.png";

export default function Contact() {
    return (
        <>
            <Navbar />
            <section className="contact-parent">
                <img src={backgroundImage} alt="background" className="contact-back" />
                <div className="contact-child">
                    <form>
                        <h2>Contact Us</h2>
                        <input className="contact-input" type="text" placeholder="What we should call you?" />
                        <input className="contact-input" type="email" placeholder="abc@gmail.com" />
                        <textarea className="textbox" placeholder="Message..." />
                        <button className="submit">Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
};