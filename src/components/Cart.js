import React from 'react';


function Cart(props) {

    const aStyle = {
        display: 'none'
    };

    function enter() {
        document.getElementById(props.id).style.display = "block";
        document.getElementById(props.id).style.width = "58px";
        document.getElementById(props.id).style.height = "29px";
        document.getElementById(props.id).style.position = "absolute";
        document.getElementById(props.id).style.fontSize= "25px";
        document.getElementById(props.id).style.marginLeft = "95px";
        document.getElementById(props.id).style.marginTop = "280px";
        document.getElementById(props.id).style.fontSize= "25px";
        document.getElementById(props.id).style.color= "#303539";
        document.getElementById(props.id).style.textDecoration= "none";
    }
    
    function leave() {
        document.getElementById(props.id).style.display = "none";
    }

    return(
        <div onPointerLeave={leave} onPointerEnter={enter} className="image">
            <a id={props.id} style={aStyle} href="#">More</a>
            <img src={props.picture}/>
        </div>
    )
}

export default Cart;