import React from "react";
import { Link } from "react-router-dom";
import "./DogInfo.css"


const DogInfo = ({dog}) => {
    

    return (
        <div className="DogInfo">
             <div className="DogInfo-data">
                <img src={dog.src} alt={dog.name}/>   
                <h2>{dog.name} Information</h2>
                <h3>{dog.age} years old</h3>
                <ul>
                {dog.facts.map(fact => (
                   <li>{fact}</li>
                ))}
                </ul>
                <Link to="/dogs">Go to Home</Link>
                </div>
            
        </div>
    );

}


export default DogInfo;