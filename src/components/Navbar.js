import { React, useState } from 'react';
import { Link } from "react-router-dom";

function find_link(id) {
    return id.match('/[a-zA-Z]+$');
}

function Navbar(props) {
    const home = '/home';
    const about = '/about';
    const market = '/market';
    const portfolio = '/portfolio';

    let id = find_link(window.location.href);
    if (id != about && id != market && id != portfolio) {id = home}
    const [active, setActive] = useState(id[0]);

    var nav_bar = (
        <>
            <div className='nav'>
                <div className='row'>
                    <div className='column'>
                        <Link to="/">
                            <div onClick={() => setActive(home)}
                            className={id === home ? 'navbox navbox-active' : 'navbox'}>
                                Home
                            </div>
                        </Link>
                    </div>
                    <div className='column'>
                        <Link to={about}>
                            <div onClick={() => setActive(about)}
                            className={active === about ? 'navbox navbox-active' : 'navbox'}>
                                About Us
                            </div>
                        </Link>
                    </div>
                    <div className='column'>
                        <Link to={market}>
                            <div onClick={() => setActive(market)}
                            className={active === market ? 'navbox navbox-active' : 'navbox'}>
                                Market
                            </div>
                        </Link>
                    </div>
                    <div className='column'>
                        <Link to={portfolio}>
                            <div onClick={() => setActive(portfolio)}
                            className={active === portfolio ? 'navbox navbox-active' : 'navbox'}>
                                Portfolio
                            </div>
                        </Link>
                    </div>
                    <div className='column'>
                        ID: {id}
                    </div>
                    <div className='column'>
                        ACTIVE: {active}
                    </div>
                </div>
            </div>
        </>
    );

    return (nav_bar);
};

export default Navbar;