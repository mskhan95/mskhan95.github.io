import React from 'react';
import "./skills.css"
import styled from 'styled-components'
import html from '../Image/html5.png'
import css from '../Image/css3.png'
import js from '../Image/js.png'
import git from '../Image/git.png'
import nodejs from '../Image/nodejs.png'
import express from '../Image/express.png'
import react from '../Image/react.png'
import reactredux from '../Image/redux.png'
import mongoose from '../Image/mongoose.png'
import mongodb from '../Image/mongodb.png'
import npm from '../Image/npm.png'
import ChakraUI from '../Image/chakraui.png'

function Skill2(props) {

        const skills = [
        {
            img:html,
            title:'HTML'
        },
        {
            img:css,
            title:'CSS'
        },
        {
            img:js,
            title:'Javascript'
        },
        {
            img:react,
            title:'ReactJS'
        },
        {
            img:reactredux,
            title:'Redux'
        },
        {
            img:ChakraUI,
            title:'Chakra-UI'
        },
        {
            img:nodejs,
            title:'NodeJS'
        },
        {
            img:express,
            title:'ExpressJS'
        },
        {
            img:mongodb,
            title:'MongoDB'
        },
        {
            img:mongoose,
            title:'Mongoose'
        },
        {
            img:npm,
            title:"NPM"
        },
        {
            img:git,
            title:'Git/Github'
        }
    ]

    return (
        <section className="skills section" id="skills">
            <Container id='skills'>
        <h2 className="section__title">SKILLS</h2>
        <span className="section__subtitle">My Technical Skill</span>
        <div className='skillsContainer'>
            {skills.map((ele,index)=>(
                <div key={index}>
                    <div style={{height:"70%"}}><img src={ele.img} alt={ele.title} width='70px' height='70px'/></div>
                    <div style={{height:"30%"}}><p style={{margin:"5% 0%"}}>{ele.title}</p></div>
                </div>
            ))}
        </div>
    </Container>
    </section>
    );
}

const Container = styled.div`
    width:100%;
    margin:auto;
    
    h1{
        text-transform:uppercase;
    }

    .skillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        gap:20px;
    }

    .skillsContainer>div{
       display:flex;
       align-items:center;
       flex-direction:column;
       box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
       padding: 20px 0px 10px 0px;
       border-radius: 10px;
    }

    .skillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
     }`

export default Skill2;