// Header.js
// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const handleLinkClick = (event) => {
        event.preventDefault();
        window.open(event.target.href, '_blank');
    };

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active" >Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/close" activeClassName="active" onClick={handleLinkClick}>Закрыть</NavLink>
                    </li>
                    <li>
                        <NavLink to="/open" activeClassName="active" onClick={handleLinkClick}>Открыть</NavLink>
                    </li>
                    <li>
                        <NavLink to="/redirect" activeClassName="active" onClick={handleLinkClick}>Redirect</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

