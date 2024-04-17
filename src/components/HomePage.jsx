import React from "react";
import homepageImg from "../assets/homepageimg.jpeg";
import homeSubImage from "../assets/homesubimage.png";
import immigration from "../assets/immigration.jpg";
import healthins from "../assets/healthins.png";
import property from "../assets/property.jpg";
import consumer from "../assets/consumer.jpg";
import backgrd from "../assets/backgrd.png";
import bulletlogo from "../assets/bulletlogo.png";
import "../styles/Homepage.css";

export default function Homepage() {
    const datas = [
        { img: bulletlogo, title: "Expert Legal Advice", desc: "Get professional legal advice from our experienced team of attorneys." },
        { img: bulletlogo, title: "Community Support", desc: "Join our vibrant community and find support from fellow members." },
        { img: bulletlogo, title: "Regulatory Resources", desc: "Access a wealth of resources to understand and comply with regulations." }
    ]
    return (
        <>
            <img src={homepageImg} alt="homelogo" className="main-logo" />
            <div className="homepage-content">
                <h1>Welcome to the village<br />Community Website,<br />your source for local laws</h1>
            </div>
            <div className="homesub">
                <img src={homeSubImage} alt="sub-img" className="sub-img" />
            </div>
            <div className="hero-section">
                <p className="hero-section-main">Discover Your Legal Rights</p>
                <span className="hero-desc">and Resources</span>
            </div>
            <div className="main-desc">
                <p>
                    Welcome to our village community! <br />We are dedicated to providing you <br />with valuable legal information and <br />resources to help you navigate the <br />complexities of the law.
                </p>
            </div>
            <div className="home-page-cards">
                <div className="home-page-card">
                    <img src={immigration} alt="immigration" height={100} width={80} className="card-img" />
                    <h2>Immigration</h2>
                    <p>Navigating borders and boundaries with expertise in immigration law</p>
                </div>
                <div className="home-page-card-one">
                    <img src={healthins} alt="immigration" height={100} width={80} className="card-img" />
                    <h2>Health Insurance Law</h2>
                    <p>Consumer rights related to health insurance</p>
                </div>
                <div className="home-page-card-two">
                    <img src={property} alt="property" height={100} width={80} className="card-img" />
                    <h2>Property</h2>
                    <p>Protecting property rights and ensuring fair dealings in real estate matters</p>
                </div>
                <div className="home-page-card-two-two">
                    <img src={consumer} alt="consumer" height={100} width={80} className="card-img" />
                    <h2>Consumer Protection Law</h2>
                    <p>Educating residents about their rights as consumers and providing recourse for unfair or deceptive business practices</p>
                </div>
            </div>
            <div className="home-main-content">
                <div className="mid-content">
                    <h1>Providing Legal Advice, <br />Community Support, <br />and Regulatory Resources</h1>
                </div>
                <div className="mid-content-dec">
                    <p>Our website offers a range of services to help you navigate legal <br />rights and regulations. From expert legal advice to community <br />support and comprehensive resources, we are here to assist you <br />every step of the way.</p>
                </div>
            </div>
            <div className="bottom-content">
                {datas.map((data) => {
                    return (
                        <div className="bottom-card">
                            <div className="bottom-img">
                                <img src={data.img} alt="bullet" height={50} width={50} />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};