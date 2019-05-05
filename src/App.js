import React, {Component} from 'react';
import './App.css';
import Box from './components/box';

class App extends Component {
  
  render() {
    return (
      //<BodyBackgroundColor backgroundColor='#FF00FF'>
        <div class="center-screen" > 
            <h1>Crew Members</h1>
            <Box image='./luffy.png' title="Captain" desc="Monkey D Luffy"/>
            <Box image='./zoro.png' title="Swordsman" desc="Roronoa Zoro"/>
            <Box image='./sanji.png' title="Cook" desc= "Vinsmok Sanji"/>
            <Box image='./chopper.png' title="Doctor" desc="Toni Toni Chopper"/>
        </div>
      //</BodyBackgroundColor>
      );  }
}

export default App;
