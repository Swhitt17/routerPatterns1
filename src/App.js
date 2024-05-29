import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import dogs from './dogs';
import DogList from './DogList';
import DogParams from './DogParams';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <NavBar />
        <Routes>
          <Route exact path='/dogs' element={<DogList dogs={dogs}/>}/>
          <Route path='/dogs/:name' element={<DogParams dogs={dogs}/>}/>
          <Route  redirect to='/dogs'/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
