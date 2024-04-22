import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import cyber_banner from "../assets/cyber-banner.png";
import herobanner from "../assets/backgrd.png";
import "../styles/PropertyLaw.css";
import cyber_bullet from "../assets/cyber-bullet.png";
import { AuthContext } from "../context/AuthContext";
import LawDescriptionPage from "../pages/LawDescriptionPage";

export default function CyberLaw() {
    const loggedUserData = useContext(AuthContext);
    const datas = [
        { image: cyber_bullet, title: "Privacy: ", description: "Cyber laws protect your personal information online, just like you wouldn't want someone peeking into your diary in real life, cyber laws prevent unauthorized access to your private information online." },
        { image: cyber_bullet, title: "Security: ", description: "Cyber laws ensure that measures are in place to keep your digital data safe from hackers and cyber attacks. It's like having locks on your doors and alarms in your house to protect your belongings." },
        { image: cyber_bullet, title: "Intellectual Property: ", description: "These laws protect things like inventions, artistic creations, and brand names. For example, if you create a cool new app, cyber laws help you prevent others from stealing or copying it without your permission." },
        { image: cyber_bullet, title: "Cybercrime: ", description: "Just like there are laws against theft and assault in the real world, there are laws against cybercrimes like hacking, online fraud, and cyberbullying. These laws are in place to keep people safe and ensure justice is served if someone breaks the rules." },
    ];
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const [selectedSection, setSelectedSection] = useState(null);
    const fetchResult = (value) => {
        fetch("https://legal-laws-server.onrender.com/lawsandregulations/cyberlaws/", {
            method: "GET",
            headers: { Authorization: `Bearer ${loggedUserData.loggedUser.token}` }
        })
            .then((res) => res.json())
            .then((json) => {
                const results = json.data.filter((user) => {
                    return value && user && user.section_title && user.section_title.toLowerCase().includes(value);
                });
                setResult(results);
            })
            .catch((err) => console.error(err));
    };
    const handleChange = (value) => {
        setInput(value);
        fetchResult(value);
    };
    const handleItemClick = (item) => {
        setSelectedSection(item);
        setResult([]);
        setInput("");
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };
    return (
        <>
            <Navbar />
            <img src={cyber_banner} alt="property-banner" className="property-banner" />
            <div className="property-law-content">
                <h1>Empowering Our Village Through Knowledge of Cyber Law</h1>
                <input
                    type="search"
                    placeholder="Search for more information"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
                {result.length !== 0 ? (
                    <div className="search-results">
                        {result.map((item) => (
                            <p className="search-item" key={item._id} onClick={() => handleItemClick(item)}>
                                {item.section_title}
                            </p>
                        ))}
                    </div>
                ) : null}
            </div>
            <div className="property-law-hero">
                <img src={herobanner} alt="hero-banner" className="property-hero-img" />
                <div className="separate">
                    <div className="prop-law-head">
                        <h1>Understanding Cyber Laws to Empower Our Village</h1>
                    </div>
                    <div className="prop-law-desc">
                        <p>Cyber law is a set of rules and regulations that govern behavior and interactions in the digital world, ensuring privacy, security, intellectual property protection, and addressing cybercrimes.</p>
                    </div>
                </div>
                <h1 className="key-points">The Key Points To Remember:</h1>
            </div>
            <div className="property-law-points">
                {datas.map((data, index) => {
                    return (
                        <div className="points" key={index}>
                            <img src={data.image} alt="home_buller" height={45} width={45} />
                            <p><b>{data.title}</b>{data.description}</p>
                        </div>
                    );
                })}
            </div>
            {selectedSection !== null ? <LawDescriptionPage selectedSection={selectedSection} /> : null}
        </>
    );
};