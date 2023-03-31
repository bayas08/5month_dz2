import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul style={{display: 'flex', justifyContent: 'space-between', width: '50%', listStyle: 'none'}}>
                <li>
                    <NavLink to={'/'}>MainPage</NavLink>
                </li>
                <li>
                    <NavLink to={'/posts'}>Posts</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;