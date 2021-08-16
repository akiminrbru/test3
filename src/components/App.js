import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from '../components/Pages/Main';
import Info from '../components/Pages/Info';

export const Context = React.createContext();

function App() {

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
            <Context.Provider value={moviesData}>
                <Route exact path="/" component={Main}/>
                <Route path="/info" component={Info}/>
            </Context.Provider>  
        </div>
    )
}

export default App;