import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

const next = () =>{
    return (
        <div className="next">
            <Link smooth to='#about'><span className="fa fa-chevron-circle-down"></span></Link>
        </div>
    )
}
export default next;