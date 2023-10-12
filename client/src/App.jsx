import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/product/" element={<Main />} />
                <Route path="/product/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
