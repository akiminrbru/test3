import React from 'react';
import Header1 from '../Headers/Header1';
import Content from '../Content';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Main() {
    return(
        <div>
            <Header1/>
            <Content/>
        </div>
    )
}

export default Main;