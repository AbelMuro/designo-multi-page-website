import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import WebDesignPage from './WebDesignPage';
import AppDesignPage from './AppDesignPage';
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App(){
    return(
            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/webdesign' element={<WebDesignPage/>}/>
                    <Route path='/appdesign' element={<AppDesignPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        )
}

export default App;