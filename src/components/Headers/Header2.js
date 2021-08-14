import React from 'react';
import { Link } from 'react-router-dom';

function Header1() {
    return(
        <div className="head2">
            <header>
                <p>Movies</p>
                <div className="back">
                    <Link to="/">Back</Link>
                </div>
            </header>
        </div>
    )
}

export default Header1;