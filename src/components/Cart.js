import React from 'react';
import {Link} from 'react-router-dom';

function Cart(props) {
    function enter() {
        document.getElementById(props.id).classList.toggle('more');
        document.getElementById(props.id2).classList.toggle('more2');
        document.getElementById(props.id3).style.border= "5px solid #299DED";
        document.getElementById(props.id4).classList.toggle('more4');
    }
    
    function leave() {
        document.getElementById(props.id).classList.toggle('more');
        document.getElementById(props.id2).classList.toggle('more2');
        document.getElementById(props.id3).style.border= "5px solid #FFFFFF";
        document.getElementById(props.id4).classList.toggle('more4');
    }

    return(
        <div onPointerLeave={leave} onPointerEnter={enter} className="image">
            <p className="display-none" id={props.id4} >{props.rating}</p>
            <div id={props.id} className="display-none">
                <Link id={props.id2} to="/info">More</Link>
            </div>
            <div>
                <img id={props.id3} src={props.picture}/>
            </div>
        </div>
    )
}

export default Cart;