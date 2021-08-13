import React from 'react';


function Cart(props) {

    const displayNone = {
        display: 'none'
    };

    function enter() {
        document.getElementById(props.id).style.display = "block";
        document.getElementById(props.id).style.width = "119px";
        document.getElementById(props.id).style.height = "39px";
        document.getElementById(props.id).style.background = "#299DED";
        document.getElementById(props.id).style.position = "absolute";
        document.getElementById(props.id).style.borderRadius = "5px";
        document.getElementById(props.id).style.marginLeft = "64px";
        document.getElementById(props.id).style.marginTop = "280px";
        document.getElementById(props.id2).style.fontSize = "25px";
        document.getElementById(props.id2).style.color = "#303539";
        document.getElementById(props.id2).style.fontWeight = "bold";
        document.getElementById(props.id2).style.marginLeft = "30px";
        document.getElementById(props.id2).style.lineHeight = "150%";
        document.getElementById(props.id2).style.textDecoration= "none";
        document.getElementById(props.id3).style.border= "5px solid #299DED";
        document.getElementById(props.id4).style.display = "block";
        document.getElementById(props.id4).style.position = "absolute";
        document.getElementById(props.id4).style.fontWeight = "bold";
        document.getElementById(props.id4).style.marginLeft = "110px";
    }
    
    function leave() {
        document.getElementById(props.id).style.display = "none";
        document.getElementById(props.id3).style.border= "5px solid #FFFFFF";
        document.getElementById(props.id4).style.display = "none";
    }

    return(
        <div onPointerLeave={leave} onPointerEnter={enter} className="image">
            <p style={displayNone} id={props.id4} >{props.rating}</p>
            <div id={props.id} style={displayNone}>
                <a id={props.id2} href="#">More</a>
            </div>
            <div>
                <img id={props.id3} src={props.picture}/>
            </div>
        </div>
    )
}

export default Cart;