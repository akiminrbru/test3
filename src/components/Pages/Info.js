import React, {useContext} from 'react';
import { Context } from '../App';
import Detinf from '../Detinf';
import Header2 from '../Headers/Header2';


function Info() {

    const moviesData = useContext(Context);

    return(
        <div>
            <Header2/>
            <Detinf title={moviesData.title[0]}/>
        </div>
    )
}

export default Info;