import React from 'react';
import './Proj.css';
const certificate = () => {
    return(
        <div className="row">
            <div className="col-sm-4">
                <h1>Awards and Certificates </h1>
            </div>
            <div className="col-sm-8">
                <div className="card">
                    <img className="img" src="images/hima-hive-page-001.jpg" alt="Avatar"></img>
                    <div className="">
                        <h4><b>Big Data Analytics: Apache hive, Apache Spark, Grpahframes, Dataframes</b></h4> 
                    </div>
                </div>
                <div className="card">
                    <img className="img" src="images/hima-python-page-001.jpg" alt="Avatar"></img>
                    <div className="">
                        <h4><b>Data Analysis Using Python</b></h4> 
                    </div>
                </div>
                <div className="card">
                    <img className="img" src="images/hima-SQL-page-001.jpg" alt="Avatar"></img>
                    <div className="">
                        <h4><b>Database and SQL for Data Science</b></h4> 
                    </div>
                </div>
            </div>

        </div>
    )
}
export default certificate;

