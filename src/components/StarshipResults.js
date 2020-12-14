import React from "react";
import { Link } from 'react-router-dom';

function StarshipResults(props) {
    return (
        <div>
            <p>NAME: {props.location.state.name}</p>
            <p>MODEL: {props.location.state.model}</p>
            <p><Link to='/'>Return To Ships</Link></p>
        </div>
    )
}

export default StarshipResults;