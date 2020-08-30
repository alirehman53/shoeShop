import React from 'react';
import SimpleTabs from './components/NavBar';
import Home from './components/Home';
import Shirts from './components/shirts';
import Shoes from './components/shoes';
import Jeans from './components/jeans';
import CheckOut from "./components/CheckOut";
import Ordered from "./components/Ordered";

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

function App() {
    return ( <
        div >
        <
        BrowserRouter >
        <
        SimpleTabs / >

        <
        Routes >

        <
        Route path = "/" >
        <
        Home / >
        <
        /Route>



        <
        Route path = "/home" >
        <
        Home / >
        <
        /Route>{' '} <
        Route path = "/Shirts" >
        <
        Shirts / >
        <
        /Route>{' '} <
        Route path = "/Shoes" >
        <
        Shoes / >
        <
        /Route>{' '} <
        Route path = "/Jeans" >
        <
        Jeans / >
        <
        /Route>{' '}


        <
        Route path = "/ordered" >
        <
        Ordered / >

        <
        /Route>


        <
        Route path = "/checkout" >
        <
        CheckOut / >

        <
        /Route>







        <
        /Routes>{' '} < /
        BrowserRouter > {
            ' '
        } <
        /div>
    );
}

export default App;