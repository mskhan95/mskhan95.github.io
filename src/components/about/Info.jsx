import React from "react";

const Info = ()=>{
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon ' ></i>
                <h3 className="about__title">Communicator</h3>
                <span className="about__subtitle">Good communicator</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">15+ projects</span>
            </div>

            <div className="about__box">
                <i class="bx bx-brain about__icon"></i>
                <h3 className="about__title">Solved</h3>
                <span className="about__subtitle">400+ DSA questions</span>
            </div>
        </div>
    )
}

export default Info;