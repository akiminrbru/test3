import React, {useState} from 'react';

function Detinf(props) {
    
    let comments = [];
    
    function loadComments() {
        if(localStorage.getItem('comments')) {
            comments = JSON.parse(localStorage.getItem('comments'));
        }
    }

    function addComments(event) {
        loadComments();
        event.preventDefault();
        let commentBody = document.getElementById("comment-body");

        let comment = {
            commentBody: commentBody.value,
            time: Date.now()
        }
        commentBody.value = "";

        comments.push(comment);

        localStorage.setItem('comments', JSON.stringify(comments));
        showComments();
    }

    function showComments() {
        let commentField = document.getElementById('comment-field');
        let out = '';
        comments.forEach(function(item) {
            out += `<p>${item.commentBody}</p>`;
        });
        commentField.innerHTML = out;
    }

    function timeConverter(UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
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
                <form className="comment-form">
                    <textarea id="comment-body" placeholder="Оставьте комментарий"></textarea>
                    <button onClick={addComments}>Оставить комментарий</button>
                </form>
                <div id="comment-field"></div>
            </div>
        </div>
    )
}

export default Detinf;