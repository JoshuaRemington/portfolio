import './portfolio.css'
import React, {Component} from 'react';
import github from './imgs/github.png';
import logo from './imgs/logo.png';
import reactlogo from './imgs/reactlogo.png';
import javascriptlogo from './imgs/javascriptlogo.svg';
import csslogo from './imgs/csslogo.svg';
import clogo from './imgs/c++logo.svg';
import pythonlogo from './imgs/pythonlogo.svg';
import htmllogo from './imgs/htmllogo.svg';
import gitlogo from './imgs/gitlogo.svg';
import projectPathfinding from './imgs/pathfinding.png';
import projectChess from './imgs/chess.png';
import projectPortfolio from './imgs/portfolioimage.png';
import Contact from './contact';


let aboutText = 'I am Joshua Remington, a student in his last year of college. I am currently in pursuit of a bachelor\'s degree in computer science.\n\n After learning about many different areas of computer science, my favorites are AI and web development. I continue to learn about these fields by creating personal projects that excite me.\n\nI am open to work in most fields of computer science. I am looking to continue to grow as a developer and person.';
let pathfinding = 'The Pathfinding Visualizer is an interactive web application that allows users to visualize various pathfinding algorithms in action. This tool provides a visual representation of how algorithms like Dijkstra\'s, A*, and others find the shortest path between two points on a grid. It is a great educational tool for learning and understanding different pathfinding techniques.';
let chessdescription = 'Simple Chess game created in python that uses the minimax algorithm and alpha beta pruning. Focus on functionality and easy to use user interface';
let portfoliodescription = 'Portfolio website made using react to showcase different skills and projects that I have created. Includes methods to contact me';
let contactText = 'Feel free to conatact me below and I will respond when I am able to'

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    
    render() {
        return( 
        <div>
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
                <div class='cloud'>
                    <div class='rain'>
                    <span></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 7 / 5 + "s"}}></span>
                        <span style={{animationDelay: 3 / 5 + "s"}}></span>
                        <span style={{animationDelay: 6 / 5 + "s"}}></span>
                        <span style={{animationDelay: 8 / 5 + "s"}}></span>
                        <span style={{animationDelay: 2 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 9 / 5 + "s"}}></span>
                        <span style={{animationDelay: 4 / 5 + "s"}}></span>
                        <span style={{animationDelay: 5 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                    </div>
                </div>
                <div class='cloud' style={{left: '20%', top: '10%', opacity: '30%'}}>
                    <div class='rain'>
                    <span></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 7 / 5 + "s"}}></span>
                        <span style={{animationDelay: 3 / 5 + "s"}}></span>
                        <span style={{animationDelay: 6 / 5 + "s"}}></span>
                        <span style={{animationDelay: 8 / 5 + "s"}}></span>
                        <span style={{animationDelay: 2 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 9 / 5 + "s"}}></span>
                        <span style={{animationDelay: 4 / 5 + "s"}}></span>
                        <span style={{animationDelay: 5 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                    </div>
                </div>
                <div class='cloud' style={{left: '70%', top: '15%', opacity: '70%'}}>
                    <div class='rain'>
                    <span></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 7 / 5 + "s"}}></span>
                        <span style={{animationDelay: 3 / 5 + "s"}}></span>
                        <span style={{animationDelay: 6 / 5 + "s"}}></span>
                        <span style={{animationDelay: 8 / 5 + "s"}}></span>
                        <span style={{animationDelay: 2 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 9 / 5 + "s"}}></span>
                        <span style={{animationDelay: 4 / 5 + "s"}}></span>
                        <span style={{animationDelay: 5 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                    </div>
                </div>
                <div class='cloud' style={{left: '-3%', top: '12%', opacity: '75%'}}>
                    <div class='rain'>
                    <span></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 7 / 5 + "s"}}></span>
                        <span style={{animationDelay: 3 / 5 + "s"}}></span>
                        <span style={{animationDelay: 6 / 5 + "s"}}></span>
                        <span style={{animationDelay: 8 / 5 + "s"}}></span>
                        <span style={{animationDelay: 2 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 9 / 5 + "s"}}></span>
                        <span style={{animationDelay: 4 / 5 + "s"}}></span>
                        <span style={{animationDelay: 5 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                    </div>
                </div>
                <div class='cloud' style={{left: '40%', top: '15%', opacity: '40%'}}>
                    <div class='rain'>
                    <span></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 7 / 5 + "s"}}></span>
                        <span style={{animationDelay: 3 / 5 + "s"}}></span>
                        <span style={{animationDelay: 6 / 5 + "s"}}></span>
                        <span style={{animationDelay: 8 / 5 + "s"}}></span>
                        <span style={{animationDelay: 2 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 9 / 5 + "s"}}></span>
                        <span style={{animationDelay: 4 / 5 + "s"}}></span>
                        <span style={{animationDelay: 5 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                    </div>
                </div>
                <div class='cloud' style={{left: '55%', top: '20%', opacity: '20%'}}>
                    <div class='rain'>
                    <span></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 7 / 5 + "s"}}></span>
                        <span style={{animationDelay: 3 / 5 + "s"}}></span>
                        <span style={{animationDelay: 6 / 5 + "s"}}></span>
                        <span style={{animationDelay: 8 / 5 + "s"}}></span>
                        <span style={{animationDelay: 2 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 9 / 5 + "s"}}></span>
                        <span style={{animationDelay: 4 / 5 + "s"}}></span>
                        <span style={{animationDelay: 5 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                    </div>
                </div>
                <div class='cloud' style={{left: '85%', top: '20%', opacity: '30%'}}>
                    <div class='rain'>
                    <span></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 7 / 5 + "s"}}></span>
                        <span style={{animationDelay: 3 / 5 + "s"}}></span>
                        <span style={{animationDelay: 6 / 5 + "s"}}></span>
                        <span style={{animationDelay: 8 / 5 + "s"}}></span>
                        <span style={{animationDelay: 2 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                        <span style={{animationDelay: 9 / 5 + "s"}}></span>
                        <span style={{animationDelay: 4 / 5 + "s"}}></span>
                        <span style={{animationDelay: 5 / 5 + "s"}}></span>
                        <span style={{animationDelay: 1 / 5 + "s"}}></span>
                    </div>
                </div>
                <div className='initial-text'>JOSHUA REMINGTON</div>
                <div className='initial-subtext'>Computer science student at CSUSM</div>
            </div>
            <div id='about' className='divider'></div>
            <div className='section-container' style={{height: '50vh'}}>
                <div className='section-text'>About Me</div>
                <div className='underlining'></div>
                <div className='textbox'>
                    <div className='textbox-title'>Who am I?</div>
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
            <div id='projects' className='divider'></div>
            <div className='section-container'>
                <div className='section-text'>Projects</div>
                <div className='underlining'></div>
                <div className='project-container'>
                    <div className='project-title'>Pathfinding Visualizer</div>
                    <div className='project-text'>{pathfinding}</div>
                    <div className='project-image'>
                        <a className='project-linking' href='https://github.com/JoshuaRemington/pathfindingvisualization' target='_blank' rel="noreferrer">Github</a>
                        <a className='project-linking' href='https://joshuaremington.github.io/pathfindingvisualization/' target='_blank' rel="noreferrer">Website</a>
                        <img src={projectPathfinding} alt='pathfinding' style={{maxHeight: '30vh'}}></img>
                    </div>
                    <img className='project-logo' src={reactlogo} alt='react'></img>
                    <img className='project-logo' src={htmllogo} alt='html'></img>
                    <img className='project-logo' src={csslogo} alt='css'></img>
                    <img className='project-logo' src={javascriptlogo} alt='javascript'></img>
                </div>
                <div className='project-container'>
                    <div className='project-title'>Chess</div>
                    <div className='project-text'>{chessdescription}</div>
                    <div className='project-image'>
                        <a className='project-linking' href='https://github.com/JoshuaRemington/chess' target='_blank' rel="noreferrer">Github</a>
                        <img src={projectChess} alt='chess' style={{maxHeight: '30vh'}}></img>
                    </div>
                    <img className='project-logo' src={pythonlogo} alt='react'></img>
                </div>
                <div className='project-container'>
                    <div className='project-title'>Portfolio</div>
                    <div className='project-text'>{portfoliodescription}</div>
                    <div className='project-image'>
                        <a className='project-linking' href='https://github.com/JoshuaRemington/portfolio' target='_blank' rel="noreferrer">Github</a>
                        <a className='project-linking' href='/'>Website</a>
                        <img src={projectPortfolio} alt='portfolio' style={{maxHeight: '30vh'}}></img>
                    </div>
                    <img className='project-logo' src={reactlogo} alt='react'></img>
                    <img className='project-logo' src={htmllogo} alt='html'></img>
                    <img className='project-logo' src={csslogo} alt='css'></img>
                    <img className='project-logo' src={javascriptlogo} alt='javascript'></img>
                </div>
            </div>
            <div id='contact' className='divider' style={{height: '20vh'}}></div>
            <div className='section-container'>
                <div className='section-text'>Contact</div>
                <div className='underlining'></div>
                <div className='contact-text'>{contactText}</div>
                <Contact></Contact>
            </div>
        </div>
        );
    }
}