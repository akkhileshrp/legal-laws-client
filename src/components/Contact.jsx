import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/Contact.css";
import backgroundImage from "../assets/backgrd.png";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        setContact((prevData) => {
            const { name, value } = e.target;
            return { ...prevData, [name]: value };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact.message.split(" ").length < 100) {
            return toast.error("Message should be at least 100 words. And make sure to fill all the fields.");
        }
        fetch("https://legal-laws-server.onrender.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact),
        })
            .then((data) => {
                if (data.ok) {
                    toast.success("Data Saved Successfully. Thank you!");
                    setContact({
                        name: "",
                        email: "",
                        message: "",
                    });
                    return data.json();
                }
                else
                    return toast.error("Error while submitting the data");
            })
            .catch((err) => {
                toast.error("Error while submitting data");
                console.error(err.stack);
            })
    };
    return (
        <>
            <Navbar />
            <section className="contact-parent">
                <img src={backgroundImage} alt="background" className="contact-back" />
                <div className="contact-child">
                    <form onSubmit={handleSubmit}>
                        <h2>Contact Us</h2>
                        <input className="contact-input" type="text" name="name" value={contact.name} onChange={handleChange} placeholder="What we should call you?" />
                        <input className="contact-input" type="email" name="email" value={contact.email} onChange={handleChange} placeholder="abc@gmail.com" />
                        <textarea className="textbox" placeholder="Message..." name="message" value={contact.message} onChange={handleChange} />
                        <button className="submit">Submit</button>
                    </form>
                </div>
            </section>
            <Toaster />
        </>
    );
};