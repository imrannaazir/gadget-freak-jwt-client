import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Gadget Freak</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/upload'>Upload Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/orders'>Order List</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <Link className=' btn btn-primary text-white' to='/login'>Login</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;