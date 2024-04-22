import React from "react";
import "../styles/LawDescriptionPage.css";
import herobanner from "../assets/backgrd.png"

export default function LawDescriptionPage({ selectedSection }) {
    return (
        <>
            <img src={herobanner} alt="hero-banner" className="property-hero-img description" />
            <div className="detail-container">
                <div className="detail-sub-container">
                    <div className="main-heading">
                        <h1 className="heading">Detailed Report of the <br /><span>{selectedSection.section_title}</span></h1>
                    </div>
                    <div className="main-contents">
                        <div className="main-logo">
                            <p>Chapter</p>
                            <div>{selectedSection.chapter}</div>
                            <p>Chapter Title</p>
                            <div>{selectedSection.chapter_title}</div>
                            <p>Section</p>
                            <div>{selectedSection.Section}</div>
                            <p>Section Title</p>
                            <div>{selectedSection.section_title}</div>
                        </div>
                        <div className="detailed-desc">
                            <p>Section Description</p>
                            <div>{selectedSection.section_desc}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};