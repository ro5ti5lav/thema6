// ClosePage.js
import React from 'react';

const ClosePage = () => {
    const handleClose = () => {
        window.close(); // Закрытие текущей вкладки или окна
    };

    return (
        <div className="page-container">
            <div className="page-content">
                <h1>Закрыть страницу</h1>
                <button onClick={handleClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default ClosePage;
