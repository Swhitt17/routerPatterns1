import React from "react";
import { useParams } from "react-router-dom";
import DogInfo from "./DogInfo";

const DogParams = ({dogs}) => {

    const {name} = useParams();

    if(name){
        const currDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return <DogInfo dog={currDog}/>;
    }

    return null;

}


export default DogParams;