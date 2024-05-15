// HomePage.js
import React, { useState } from 'react';

const HomePage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className="page-container" onMouseMove={handleMouseMove}>
            <div className="page-content">
                <h1>Добро пожаловать!</h1>
                <p>Дата: {new Date().toLocaleDateString()}</p>
                <p>Время: {new Date().toLocaleTimeString()}</p>
                <p>UserAgent: {navigator.userAgent}</p>
                <p>View Port: {window.innerWidth} x {window.innerHeight}</p>
                <p>Координаты курсора мыши: {mousePosition.x}, {mousePosition.y}</p>
                <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
