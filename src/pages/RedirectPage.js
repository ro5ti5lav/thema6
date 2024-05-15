// RedirectPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/'); // Перенаправление на главную страницу
    };

    return (
        <div className="page-container">
            <div className="page-content">
                <h1>Redirect</h1>
                <button onClick={handleRedirect}>Перенаправить</button>
            </div>
        </div>
    );
};

export default RedirectPage;

