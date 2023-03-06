import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';

import Footer from './Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App(){
    return(
            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        )
}

export default App;