
// OpenPage.js
import React, { useState } from 'react';

const OpenPage = () => {
    const [url, setUrl] = useState('');

    const handleOpen = () => {
        let targetUrl = url.trim(); // Удаляем начальные и конечные пробелы из URL
        // Добавляем протокол "http://" к URL, если он относительный и не содержит протокол
        if (!targetUrl.match(/^[a-zA-Z]+:\/\//)) {
            targetUrl = 'http://' + targetUrl;
        }
        window.open(targetUrl, '_blank'); // Открытие новой вкладки с указанным URL
    };

    const handleChange = (e) => {
        setUrl(e.target.value);
    };

    return (
        <div className="page-container">
            <div className="page-content">
                <h1>Открыть страницу</h1>
                <input type="text" value={url} onChange={handleChange} placeholder="Введите URL" />
                <button onClick={handleOpen}>Открыть</button>
            </div>
        </div>

    );
};

export default OpenPage;


