import React,{ Component} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

class Navbar extends Component{
    render(){
        return(         
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
                <div className='container'>
                    <Link className="navbar-brand" to="#">Oz Immigration</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                </div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/About">Link</Link>
                        </li>
                    
                    </ul>
                    </div>
          </nav>
        );
    }
}

export default Navbar;