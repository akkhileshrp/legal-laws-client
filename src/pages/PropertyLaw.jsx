import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import property_banner from "../assets/property-banner.png";
import herobanner from "../assets/backgrd.png";
import "../styles/PropertyLaw.css";
import home_bullet from "../assets/home-buller.png";
import { AuthContext } from "../context/AuthContext";
import LawDescriptionPage from "../pages/LawDescriptionPage";

export default function PropertyLaw() {
    const loggedUserData = useContext(AuthContext);
    const datas = [
        { image: home_bullet, title: "Ownership Rights: ", description: "Property law defines what you can do with something you own, like land or a car. It gives you the right to possess, use, and control your property, and it protects  you from others taking or damaging it without permission." },
        { image: home_bullet, title: "Types of Property: ", description: "There are two main types of property: real property, which includes land and buildings, and personal property, which includes things you can move like cars, furniture, and belongings" },
        { image: home_bullet, title: "Acquiring Property: ", description: "You can get property in different ways, like buying it, inheriting it, receiving it as a gift, or using it for a certain period of time (like renting). Property law explains the legal steps you need to take to own or use property." },
        { image: home_bullet, title: "Property Transactions: ", description: "Property law covers buying, selling, renting, or borrowing property. It includes things like contracts and agreements that outline what each person involved has to do, like paying rent on time or keeping the property in good condition." },
    ];
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const fetchData = (value) => {
        fetch("https://legal-laws-server.onrender.com/lawsandregulations/propertylaws/", {
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
        fetchData(value);
    };
    return (
        <>
            <Navbar />
            <img src={property_banner} alt="property-banner" className="property-banner" />
            <div className="property-law-content">
                <h1>Empowering Our Village Through Knowledge of  Property Tax Law</h1>
                <input
                    type="search"
                    placeholder="Search for more information"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
                {result.length !== 0 ? (
                    <div className="search-results">
                        {result.map((item) => (
                            <p className="search-item" key={item._id}>
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
                        <h1>Understanding Property Taxes and Empowering Our Community</h1>
                    </div>
                    <div className="prop-law-desc">
                        <p>Property law governs the rights, obligations, and relationships related to ownership, use, and transfer of real and personal property.</p>
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
        </>
    );
};