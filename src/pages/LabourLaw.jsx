import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import labour_banner from "../assets/labour-banner.png";
import herobanner from "../assets/backgrd.png";
import "../styles/PropertyLaw.css";
import labour_bullet from "../assets/labour-bullet.png";
import { AuthContext } from "../context/AuthContext";
import LawDescriptionPage from "../pages/LawDescriptionPage";

export default function LabourLaw() {
    const loggedUserData = useContext(AuthContext);
    const datas = [
        { image: labour_bullet, title: "Employee Rights: ", description: "Labor laws protect workers' rights to join labor unions, collectively bargain with employers, and take legal action if their rights are violated, empowering them to advocate for fair treatment and better working conditions." },
        { image: labour_bullet, title: "Working Conditions: ", description: "These laws establish safety standards to protect workers from hazards in the workplace, such as dangerous machinery, toxic chemicals, or unsafe working environments." },
        { image: labour_bullet, title: "Wages and Hours: ", description: "Labor laws set minimum wage levels and regulate the number of hours employees can work in a day or week to prevent exploitation and ensure fair compensation for their time and effort." },
        { image: labour_bullet, title: "Family and Medical Leave: ", description: "Labor laws provide provisions for family and medical leave, allowing workers to take time off for personal or family health reasons without risking their job security." },
    ];
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const [selectedSection, setSelectedSection] = useState(null);
    const fetchResult = (value) => {
        fetch("https://legal-laws-server.onrender.com/lawsandregulations/labourlaws/", {
            method: "GET",
            headers: { Authorization: `Bearer ${loggedUserData.loggedUser.token}` }
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
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
            <img src={labour_banner} alt="property-banner" className="property-banner" />
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
                        <h1>Understanding Labor Laws to Empower Our Village</h1>
                    </div>
                    <div className="prop-law-desc">
                        <p>Labor law governs the rights and responsibilities of workers and employers in the workplace, covering issues such as wages, working conditions, and employee rights.</p>
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