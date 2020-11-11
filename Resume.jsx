import React from 'react';

const resume = () =>{
    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <h1>Education</h1>
                </div>
                <div className="col-sm-8">
                    <h2>University of Texas at Arlington</h2>
                    <p><span><i>Masters in Computer Science</i></span> May,2021</p>
                    <p>I did my Master's in Computer Science majoring in Artificial Intelligence and Database systems.
                         During my 2 year course at UTA, I learnt a lot about software engineering and discovered my passion for Data Science.
                         Master's degree helped me take my knowledge in computer programming to the next step. </p>

                    <h2>Anna University</h2>
                    <p><span><i>Bachelor in Computer Science</i></span> May,2019</p>
                    <p>At Anna University, which is one of the most well-known engineering colleges in India, I did my Bachelor of Engineering in Computer Science. 
                        I graduated with a first class with distinction. During this 4 year undergraduate degree, I learnt a lot about programming and basics of data structures and algorithms.
                        It helped me build a solid foundation for my programming skills and helped me strengthen my basics in computer programming. 
                    </p>
                </div>            
            </div>
            <hr/>
            {/* <div className="row">
                <div className="col-sm-4">
                    <h1>Work</h1>
                </div>
                <div className="col-sm-8">
                    <h2>Freelancer</h2>
                    <p><span><i>E-commerce Website</i></span></p>
                    <p>Being a freelancer gives me a choice to work on various projects at my own time.
                        As a freelancer, I worked on multiple projects like custom software to a full functioning E-Commerce.
                        Website. Among those projects, some are Barcode Generator, Report Generator, and herbs n leaf website. </p>

                    <h2>I-Tech Media</h2>
                    <p><span><i>Web Developer</i></span>Sept,2016 - Nov,2017 </p>
                    <p>After completing my bachelor's in computer science, I started my carrier as a Web Developer at I-Tech Media.
                        My Responsibilities were to update various content on the website and develop different modules for ongoing projects.
                        Here I learned various aspects of the industry and how things work in the actual world.
                    </p>
                </div>            
            </div>
            <hr/> */}
            <div className="row">
                <div className="col-sm-4">
                    <h1>Skills</h1>
                </div>
                <div className="col-sm-8">
                    <i className="icon-html5 tech"></i>
                    <i className="icon-python tech"></i>
                    <i className="icon-css tech"></i>
                    <i className="icon-bootstrap tech"></i>
                    <i className="icon-java tech"></i>
                    <i className="icon-SQL tech"></i>
                    <i className="icon-reactjs tech"></i>
                    <i className="icon-wordpress tech"></i>
                    <i className="icon-mysql tech"></i>
                    <i className="icon-hive tech"></i>
                    <i className="icon-javascript tech"></i>
                    <i className="icon-R tech"></i>
                    <i className="icon-Tableau tech"></i>
                </div>
            </div>
            <hr/>
        </div>
    )
}
export default resume;