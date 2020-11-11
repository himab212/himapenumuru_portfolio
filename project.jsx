import React from 'react';
import './Proj.css';

const project = () =>{
    return (
        <div className="row">
            <div className="col-sm-4">
                <h1>Project</h1>
            </div>
            <div className="col-sm-8 all-cards">
                <div className="card">
                <a href="https://github.com/himab212/Movie_recommendation_system_img_captioning"><img className="im" src="images/Movie-classification.jpg" alt="Avatar"></img></a>
                    <div className="">
                        <h5><b>Movie Recommendation with Image Captioning</b></h5> 
                        <details className="details">
                            <summary className="summary">Project Description</summary>
                            <p>This is a movie recommendation system. 
                                It returns movie titles that match the text that you type in the search box and also classiies the movie titles based on their genres. 
                                It also has an image captioning system that returns images with captions that match the text that you search in the text box. </p>
                        </details>
                    </div>
                </div>
                <div className="card">
                    <a href="https://viratbhattportfolio.netlify.app/"><img className="im" src="images/portss.png" alt="Avatar"></img></a>
                    <div className="">
                        <h5><b>Portfolio</b></h5> 
                        <details className="details">
                            <summary className="summary">Project Description</summary>
                            <p>This is a simple React portfolio using states and props data is populated on the web page.</p>
                        </details>
                    </div>
                </div>
                <div className="card">
                    <a href="http://hxp0931.uta.cloud/"><img className="im" src="images/hima-blog.png" alt="Avatar"></img></a>
                    <div className="">
                        <h5><b>Blog</b></h5> 
                        <details className="details">
                            <summary className="summary">Project Description</summary>
                            <p>This is a basic blog made with Wordpress, CSS, HTML and Javascript.</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default project;