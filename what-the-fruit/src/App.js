import React from "react";
import Home from "./components/Home";
import Camera from "./components/Camera";
// import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {

  render () {
    return (
      <div className="App">
         <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
      </div>
      // <Home /> 
    )

   
  }
}
