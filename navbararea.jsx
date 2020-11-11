/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
//import { Link, Router } from 'react-router';


const navbararea = () =>{

    return (
        <div className='container'> 
                <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark">
                    <Link smooth to='#home'>HOME</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link smooth to='#about'>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to='#resume'>RESUME</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to='#project'>PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to='#award'>AWARDS</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </div>
    )
}
export default navbararea;