import React from "react";
import Navbar from "../components/Navbar";
import criminal_banner from "../assets/criminal-banner.png";
import herobanner from "../assets/backgrd.png";
import "../styles/PropertyLaw.css";
import criminal_bullet from "../assets/criminal-bullet.png";

export default function CriminalLaw() {
    const datas = [
        { image: criminal_bullet, title: "Legal Process: ", description: "Legal process involves rules and procedures governing interactions with the law, including investigation, prosecution, defense, and adjudication, ensuring fair treatment and justice within a legal system." },
        { image: criminal_bullet, title: "Defining Crimes: ", description: "Defining crimes involves specifying actions or omissions prohibited by law, determining their elements, and establishing penalties, aiming to maintain social order and protect individuals and property." },
        { image: criminal_bullet, title: "Punishments: ", description: "Punishments are penalties imposed by authorities for violating laws, including fines, imprisonment, probation, community service, or capital punishment, intended to deter crime and promote justice." },
        { image: criminal_bullet, title: "Rights of the Accused: ", description: "Rights of the accused include the right to a fair trial, presumption of innocence, legal representation, protection against self-incrimination, and appeal, ensuring fundamental fairness and due process in criminal proceedings." },
    ]
    return (
        <>
            <Navbar />
            <img src={criminal_banner} alt="property-banner" className="property-banner" />
            <div className="property-law-content">
                <h1 style={{ color: "white" }}>Empowering Our Village Through Knowledge of  Criminal  Law</h1>
                <input type="search" placeholder="Search for more information" />
            </div>
            <div className="property-law-hero">
                <img src={herobanner} alt="hero-banner" className="property-hero-img" />
                <div className="separate">
                    <div className="prop-law-head">
                        <h1>Understanding Criminal Laws to Empower Our Village</h1>
                    </div>
                    <div className="prop-law-desc">
                        <p>Criminal law governs the rules and penalties for behavior that is considered harmful to society, including offenses like theft, assault, and murder.</p>
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