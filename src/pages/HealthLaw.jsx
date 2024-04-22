import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import health_banner from "../assets/health-banner.png";
import herobanner from "../assets/backgrd.png";
import "../styles/PropertyLaw.css";
import hospital_bullet from "../assets/hospital-buller.png";
import { AuthContext } from "../context/AuthContext";
import LawDescriptionPage from "../pages/LawDescriptionPage";

export default function Healthlaw() {
    const loggedUserData = useContext(AuthContext);
    const datas = [
        { image: hospital_bullet, title: "Access to Healthcare: ", description: "Health law ensures that everyone has the right to access healthcare services they need, regardless of their income, age, or health condition." },
        { image: hospital_bullet, title: "Patient Rights: ", description: "It protects patients' rights to receive safe, quality care, including the right to privacy, informed consent, and confidentiality of medical information." },
        { image: hospital_bullet, title: "Health Insurance: ", description: "Health law governs health insurance companies and policies to ensure fair coverage, affordable premiums, and protection against discrimination." },
        { image: hospital_bullet, title: "Consumer Protection: ", description: "It protects consumers from fraudulent or harmful healthcare practices and ensures they have access to accurate information about treatments and products." },
    ];
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const [selectedSection, setSelectedSection] = useState(null);
    const fetchResult = (value) => {
        fetch("https://legal-laws-server.onrender.com/lawsandregulations/healthlaws/", {
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
            <img src={health_banner} alt="property-banner" className="property-banner" />
            <div className="property-law-content">
                <h1>Empowering Our Village Through Knowledge of  Health Law</h1>
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
                        <h1>Understanding Health  Laws to Empower Our Village</h1>
                    </div>
                    <div className="prop-law-desc">
                        <p>Health law refers to rules and regulations that govern various aspects of healthcare, aimed at protecting individuals' health and ensuring fair access to healthcare services.</p>
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