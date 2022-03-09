import { React, useState } from 'react';
import { Link } from "react-router-dom";

// get data from the url
function find_link(id) {
    return id.match('/[a-zA-Z]+$');
}

// display the specific box (used multiple times in main display)
function display_navbox(link, display, id, setActive) {
    const navbox = (
        <div className='column'>
            <Link to={link}>
                <div onClick={() => setActive(link)}
                className={id === link ? 'navbox navbox-active' : 'navbox'}>
                    {display}
                </div>
            </Link>
        </div>
    )
    return (navbox)
}

// main navbar function
function Navbar(props) {
    const home = '/';
    const about = '/about';
    const market = '/market';
    const portfolio = '/portfolio';

    let id = find_link(window.location.href);
    if (id !== null) {id = id[0]}
    else {id = '/'}
    const [active, setActive] = useState(id);

    var nav_bar = (
        <>
            <div className='nav'>
                <div className='row'>
                    {display_navbox(home, 'Home', active, setActive) /* home page */}
                    {display_navbox(about, 'About Us', active, setActive) /* about us page */}
                    {display_navbox(market, 'Market', active, setActive) /* market page */}
                    {display_navbox(portfolio, 'Portfolio', active, setActive) /* portfolio page */}
                </div>
            </div>
        </>
    );

    return (nav_bar);
};

export default Navbar;