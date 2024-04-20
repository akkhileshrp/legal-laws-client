import React from "react";
import Navbar from "./Navbar";
import lawsandregu from "../assets/lawsandregu.png";
import hammer from "../assets/hammer-back.png";
import backgrd from "../assets/backgrd.png";
import "../styles/LawsandRegulations.css";
import property_law from "../assets/home-law.png";
import health_law from "../assets/health-law.png";
import labour_law from "../assets/labour-law.png";
import education_law from "../assets/education-law.png";
import criminal_law from "../assets/criminal-law.png";
import cyber_law from "../assets/cyber-law.png";
import { Link } from "react-router-dom";

export default function LawsandRegulations() {
    const datas = [
        { img: hammer, title: "Stay informed about local regulations and legal requirements." },
        { img: hammer, title: "Easily access a wide range of legal resources with just a few clicks." },
        { img: hammer, title: "Navigate through local laws with ease and certainty." }
    ];
    return (
        <>
            <Navbar />
            <img src={lawsandregu} alt="lawsandregulation" className="laws-img" />
            <div className="laws-main-con">
                <h1 className="laws-main">Empowering Our Village Through Knowledge of Local Laws</h1>
            </div>
            <div className="laws-main-desc">
                <p>Our website provides residents with easy-to-navigate sections covering local laws and regulations, empowering our community with essential information.</p>
            </div>
            <div className="laws-bullet">
                {datas.map((data) => {
                    return (
                        <div className="laws-sub">
                            <img src={data.img} alt="hammer" className="hammer" height={35} width={35} />
                            <span>{data.title}</span>
                        </div>
                    );
                })}
            </div>
            <img src={backgrd} alt="backgrd" className="back-grd" />
            <div className="laws-main-content">
                <h1>Learn About <br />the Law</h1>
                <div className="laws-main-descrip">
                    <p>Explore "Learn About the Law" articles categorized by practice area. Click to access detailed breakdowns and specific articles within each section.</p>
                </div>
            </div>
            <div className="laws-cat">
                <div className="laws-cat-one">
                    <div className="laws-cat-one-con">
                        <img src={property_law} alt="property-law" height={50} width={50} />
                        <span><Link to="/lawsandregulations/propertylaw">Property Law</Link></span>
                    </div>
                    <div className="laws-cat-two-con">
                        <img src={health_law} alt="health-law" height={50} width={50} />
                        <span><Link to="/lawsandregulations/healthlaw">Health Law</Link></span>
                    </div>
                    <div className="laws-cat-three-con">
                        <img src={labour_law} alt="health-law" height={50} width={50} />
                        <span><Link to="/lawsandregulations/labourlaw">Labour Law</Link></span>
                    </div>
                </div>
                <div className="laws-cat-two">
                    <div className="laws-cat-four-con">
                        <img src={education_law} alt="education-law" height={50} width={50} />
                        <span><Link to="/lawsandregulations/educationlaw">Education Law</Link></span>
                    </div>
                    <div className="laws-cat-five-con">
                        <img src={criminal_law} alt="education-law" height={50} width={50} />
                        <span><Link to="/lawsandregulations/criminallaw">Criminal Law</Link></span>
                    </div>
                    <div className="laws-cat-six-con">
                        <img src={cyber_law} alt="education-law" height={50} width={50} />
                        <span><Link to="/lawsandregulations/cyberlaw">Cyber Law</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
};