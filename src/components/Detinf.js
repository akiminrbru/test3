import React, {useState} from 'react';

function Detinf(props) {
    
    const [comm, setCom] = useState(0);

    function comment() {
        let com = document.getElementById("com").value;
        localStorage.setItem(comm, com)
        document.getElementById("com").value = "";
        setCom(comm++);
    }

    return(
        <div className="info">
            <div className="image2">
                <img src={props.picture}></img>
                <span>{props.rating}</span>
            </div>
            <div className="container">
                <p className="title">{props.title}</p>
                <p className="year">{props.year}</p>
                <h3>Synopsis</h3>
                <p>{props.synopsis}</p>
                <input id="com"></input>
                <button onClick={comment}>добавить</button>
            </div>
        </div>
    )
}

export default Detinf;