import React from "react";
import Navbar from "../components/Navbar";
import health_banner from "../assets/health-banner.png";
import herobanner from "../assets/backgrd.png";
import "../styles/PropertyLaw.css";
import hospital_bullet from "../assets/hospital-buller.png";

export default function Healthlaw() {
    const datas = [
        { image: hospital_bullet, title: "Ownership Rights: ", description: "Property law defines what you can do with something you own, like land or a car. It gives you the right to possess, use, and control your property, and it protects  you from others taking or damaging it without permission." },
        { image: hospital_bullet, title: "Types of Property: ", description: "There are two main types of property: real property, which includes land and buildings, and personal property, which includes things you can move like cars, furniture, and belongings" },
        { image: hospital_bullet, title: "Acquiring Property: ", description: "You can get property in different ways, like buying it, inheriting it, receiving it as a gift, or using it for a certain period of time (like renting). Property law explains the legal steps you need to take to own or use property." },
        { image: hospital_bullet, title: "Property Transactions: ", description: "Property law covers buying, selling, renting, or borrowing property. It includes things like contracts and agreements that outline what each person involved has to do, like paying rent on time or keeping the property in good condition." },
    ]
    return (
        <>
            <Navbar />
            <img src={health_banner} alt="property-banner" className="property-banner" />
            <div className="property-law-content">
                <h1>Empowering Our Village Through Knowledge of  Health Law</h1>
                <input type="search" placeholder="Search for more information" />
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
        </>
    );
};