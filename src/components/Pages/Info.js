import React from 'react';
import Detinf from '../Detinf';
import Header2 from '../Headers/Header2';
import axios from 'axios';
import { useState } from 'react';

function Info() {

    const [moviesData, setMoviesData] = useState({
        picture: [],
        title: [],
        rating: [],
    });

    axios.get("https://yts.mx/api/v2/list_movies.json")
    .then(response => response.data.data.movies)
    .then(data => setMoviesData({
        ...moviesData,
        picture: data.map(x => x.medium_cover_image),
        title: data.map(x => x.title),
        rating: data.map(x => x.rating),
    }))

    return(
        <div>
            <Header2/>
            <Detinf title={moviesData.title[0]}/>
        </div>
    )
}

export default Info;