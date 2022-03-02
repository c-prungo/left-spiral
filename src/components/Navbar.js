import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className='row'>
                <div className='column'>
                    <Link to="/">
                        <div className='nav'>
                            Home
                        </div>
                    </Link>
                </div>
                <div className='column'>
                    <Link to="/about">
                        <div className='nav'>
                            About Us
                        </div>
                    </Link>
                </div>
                <div className='column'>
                    <Link to="/market">
                        <div className='nav'>
                            Market
                        </div>
                    </Link>
                </div>
                <div className='column'>
                    <Link to="/portfolio">
                        <div className='nav'>
                            Portfolio
                        </div>
                    </Link>
                </div>
            </div>
                
        </>
    );
};

export default Navbar;