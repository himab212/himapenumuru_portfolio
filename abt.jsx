import React from 'react';

const abt = () =>{
    return (
        <div className="row abt-layout">
            <div className="col-sm-4 profile-area">
                <img src="images/IMG-6412.jpg" alt="Paris"></img>
            </div>
            <div className="col-sm-8 abt-me">
                <div className=" abt-top-section">
                    <h2>About Me</h2>
                    <p>I would describe myself to be a zealous and determined software engineer. I am very fond of Machine learning and Data science. I have always been very curious and had the desire to learn more in the field of computer science and machine learning. I wish to build a career in the field of software engineering/ data science. I did my Bachelor of Engineering in Computer Science at Anna University, India. I am pursuing my Master's degree in Computer Science at the University of Texas at Arlington, majoring in Artificial Intelligence and Databases.
                    </p>
                </div>
                <div className="col-sm-12 abt-detail">
                    <div className="col-sm-6 abt-contact">
                        <h2>Contact Details</h2>
                        <address>
                            Hima Bindu Penumuru<br></br>
                            Arlington <br></br>
                            Texas, 76013<br></br>
                            Phone: +1 8175384074<br></br> USA
                        </address>
                    </div>
                    {/* <div className="col-sm-6">
                        <button className="btn"><i className="fa fa-download">  Download Resume</i> </button>
                    </div> */}

                 </div>
            </div>
        </div>
    )
}
export default abt;