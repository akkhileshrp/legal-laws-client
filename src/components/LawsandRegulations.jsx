import React from "react";
import Navbar from "./Navbar";
import lawsandregu from "../assets/lawsandregu.png";
import hammer from "../assets/hammer-back.png";
import backgrd from "../assets/backgrd.png";
import "../styles/LawsandRegulations.css";

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
                
            </div>
        </>
    );
};