import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <table className="nav">
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">Home</Link>
                        </td>
                        <td>
                            <Link to="/about">About Us</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Navbar;