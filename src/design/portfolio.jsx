import './portfolio.css'
import React, {Component} from 'react';
import clouds from './imgs/clouds.jpeg';
import github from './imgs/github.png';
import logo from './imgs/logo.png';
import cloudtext from './imgs/cloudtext.png';
import reactlogo from './imgs/reactlogo.png';
import javascriptlogo from './imgs/javascriptlogo.svg';
import csslogo from './imgs/csslogo.svg';
import clogo from './imgs/c++logo.svg';
import pythonlogo from './imgs/pythonlogo.svg';
import htmllogo from './imgs/htmllogo.svg';
import gitlogo from './imgs/gitlogo.svg';


let aboutText = 'I am a college student currently in my senior year at California State University San Marcos.\n\nMy interests in programming include AI, web design, and software engineering.';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    
    render() {
        return( 
        <div className='scroll'>
            <div className='navbar'>
                <img className='navbar-logo' src={logo} alt='Logo'></img>
                <div className='navbar-text-1'>JOSHUA REMINGTON</div>
                <a className='github-link' href="https://github.com/JoshuaRemington" target="_blank" rel="noreferrer">
                    <img className='github-logo' src={github} alt='Github'></img>
                </a>
                <a className='navbar-text-linking' href="./#contact">Contact</a>
                <a className='navbar-text-linking' href="./#projects">Projects</a>
                <a className='navbar-text-linking' href="./#about">About</a>
                <a className='navbar-text-linking' href="/">Home</a>
            </div>
            <div className='initial-container'>
                <img className='image' src={clouds} alt='background'></img>
                <div className='initial-text'>JOSHUA REMINGTON</div>
                <div className='initial-subtext'>I am currently pursuing my bachelor's degree in computer science</div>
                {/*<a className='social-link' href="https://github.com/JoshuaRemington" target="_blank" rel="noreferrer">
                    <img className='github-image' src={github} alt='Github'></img>
            </a>*/}
            </div>
            <div id='about' className='divider'></div>
            <div className='section-container'>
                <div className='section-text'>About Me</div>
                <div className='underlining'></div>
                <div className='textbox'>
                    <img className='image' src={cloudtext} alt='textbox'></img>
                    <div className='textbox-text'>{aboutText}</div>
                </div>
                <div className='skills-container'>
                    <div className='section-text'>SKILLS</div>
                    <div className='underlining'></div>
                    <div className='skills'><img className='skills-logo' src={reactlogo} alt='react'></img>React</div>
                    <div className='skills'><img className='skills-logo' src={javascriptlogo} alt='react'></img>Javascript</div>
                    <div className='skills'><img className='skills-logo' src={csslogo} alt='react'></img>CSS</div>
                    <div className='skills'><img className='skills-logo' src={pythonlogo} alt='react'></img>Python</div>
                    <div className='skills'><img className='skills-logo' src={htmllogo} alt='react'></img>HTML</div>
                    <div className='skills'><img className='skills-logo' src={gitlogo} alt='react'></img>GIT</div>
                    <div className='skills'><img className='skills-logo' src={github} alt='react'></img>Github</div>
                    <div className='skills'><img className='skills-logo' src={clogo} alt='react'></img>C++</div>
                </div>
            </div>
            <div id='projects' className='section-container'>
            </div>
            <div id='contact' className='section-container'>
            </div>
        </div>
        );
    }
}