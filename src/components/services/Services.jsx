import React, { useState } from "react";
import "./services.css"
import shop from "../../assets/shop.PNG"
import sephora from "../../assets/sephora.PNG"
import sugar from "../../assets/sugar.PNG"

const Services = ()=>{
    const [toggleState,setToggleState] = useState(0);

    const toggleTab = (index)=>{
        setToggleState(index);
    }

    return(
        <section className="services section" id="services">
            <h2 className="section__title" >Projects</h2>
            <span className="section__subtitle">What I have made</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <img className="project__img services__icon" src={shop} alt="" />
                    <div>
                        <i className="uil uil-web-grid services__icon" ></i>
                        <h3 className="services__title">kfc.com clone website</h3>
                    </div>

                    <span className="services__button" onClick={()=>{toggleTab(1)}} >
                        View more
                        <i className="uil uil-arrow-right services__button-icon" ></i>
                    </span>

                    <div className={toggleState===1? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Kfc.com clone website</h3>

                            <img className="projectmodal__img  services__modal-title" src={shop} alt="" />

                            <p className="services__modal-description">kfc.com is a US based fast-food chain</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Developed along with team of 4 members in one week
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Technology - HTML, CSS, Javascript, API
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    {/* <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        i develop user interface
                                    </p> */}
                                    <a download="" href='https://serene-bavarois-7356f0.netlify.app/' target="_blank" className="button button-flex">
                                        Visit website
                                    </a>
                                </li>

                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        i develop user interface
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        i develop user interface
                                    </p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="services__content">
                    <img className="project__img services__icon" src={sephora} alt="" />
                    <div>
                        <i className="uil uil-arrow services__icon" ></i>
                        <h3 className="services__title">Dineout clone website</h3>
                    </div>

                    <span onClick={()=>{toggleTab(2)}} className="services__button">
                        View more
                        <i className="uil uil-arrow-right services__button-icon" ></i>
                    </span>

                    <div className={toggleState===2? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Dineout clone website</h3>
                            
                            <img className="projectmodal__img  services__modal-title" src={sephora} alt="" />

                            <p className="services__modal-description">Dineout is a Online platform which used to Book Online Resturents </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Developed along with team of 4 in one week
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Technology - React, Chakra UI, API
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <a download="" href='https://reliable-tulumba-cdf387.netlify.app/' target="_blank" className="button button-flex">
                                        Visit website
                                    </a>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="services__content">
                    <img className="project__img services__icon" src={sugar} alt="" />
                    <div>
                        <i className="uil uil-edit services__icon" ></i>
                        <h3 className="services__title">Bewakoof clone website</h3>
                    </div>

                    <span onClick={()=>{toggleTab(3)}} className="services__button">
                        View more
                        <i className="uil uil-arrow-right services__button-icon" ></i>
                    </span>

                    <div className={toggleState===3? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Bewakoof clone website</h3>

                            <img className="projectmodal__img  services__modal-title" src={sugar} alt="" />

                            <p className="services__modal-description">Bewakoof is a e commerce platform which mainly deals with Customised Clothing</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Developed along with team of 3 members in one week
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Technology - HTML, CSS, javascript, API
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <a download="" href='https://cheery-klepon-becbe0.netlify.app/' target="_blank" className="button button-flex">
                                        Visit website
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;