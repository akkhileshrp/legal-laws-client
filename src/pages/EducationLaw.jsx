import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import educational_banner from "../assets/educational-banner.png";
import herobanner from "../assets/backgrd.png";
import "../styles/PropertyLaw.css";
import educational_bullet from "../assets/educational-bullet.png";
import { AuthContext } from "../context/AuthContext";
import LawDescriptionPage from "../pages/LawDescriptionPage";

export default function EducationalLaw() {
    const loggedUserData = useContext(AuthContext);
    const datas = [
        { image: educational_bullet, title: "Student Rights: ", description: "It protects students' rights to learn in a safe and supportive environment, free from discrimination or bullying, and ensures they have the opportunity to succeed." },
        { image: educational_bullet, title: "Equal Access: ", description: "Education law ensures that every individual, regardless of their location or identity, has the opportunity to access education and acquire knowledge. It mandates that education be inclusive, equitable, and accessible to all, fostering personal development, societal progress, and the realization of human potential without discrimination or barriers." },
        { image: educational_bullet, title: "Special Education: ", description: "Special education caters to students with diverse learning needs, offering tailored support and services to ensure academic and personal success." },
        { image: educational_bullet, title: "Teacher Rights: ", description: "Teacher rights include the right to fair compensation, safe working conditions, academic freedom, due process in employment decisions, freedom from discrimination, and the ability to advocate for students' needs." },
    ];
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const [selectedSection, setSelectedSection] = useState(null);
    const fetchResult = (value) => {
        fetch("https://legal-laws-server.onrender.com/lawsandregulations/educationlaws/", {
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
            <img src={educational_banner} alt="property-banner" className="property-banner" />
            <div className="property-law-content">
                <h1>Empowering Our Village Through Knowledge of  Education Law</h1>
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
                        <h1>Understanding Education Laws to Empower Our Village</h1>
                    </div>
                    <div className="prop-law-desc">
                        <p>Education law ensures that everyone has access to quality education and protects the rights and responsibilities of students, parents, teachers, and schools.</p>
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