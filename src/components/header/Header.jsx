import React, { useState } from "react";
import './header.css'
import CV from "../../assets/Mohd_Shaban_Khan_Resume.pdf"

const Header = ()=>{
    const[Toggle,showMenu] = useState(false);

    const handleResumeClick = () => {
  // open in new tab
  window.open(CV, "_blank");

  // trigger download
  const link = document.createElement("a");
  link.href = CV;
  link.download = "Mohd_Shaban_khan_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

    return(
        <header className="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                MOHD SHABAN KHAN
                </a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu" }>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link ">
                                <i className="uil uil-estate nav__icon"></i> HOME
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> ABOUT
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> SKILLS
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> PROJECTS
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> CONTACT
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a download="" href={CV} className="nav__link" target="_blank">
                                <i className="uil uil-message nav__icon"></i> RESUME
                            </a>
                        </li> */}
                        <li className="nav__item">
                            <button style={{backgroundColor:"white"}} className="nav__link" onClick={handleResumeClick}>
                                <i className="uil uil-message nav__icon"></i> RESUME
                            </button>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)} ></i>
                </div>

                <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
                    <i className="uil uil-apps" ></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;