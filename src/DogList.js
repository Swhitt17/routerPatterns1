import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"


const DogList = ({dogs}) => {

    return (
        <div className="DogList">
            <div className="row mt-4">
                <div className="col">
                  <h2 className="text-center">Check Out Our Dogs </h2>
                </div> 
            </div>     
            <div className="row">
                {dogs.map(dog => 
                    (<div className="DogList-listing">
                        <img src={dog.src} alt={dog.name}/>
                        <h4 className="mt-3">
                          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                        </h4>
                    </div>  
                ))}
            </div>
        </div>
    );
}


export default DogList;