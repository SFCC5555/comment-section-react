import React from 'react';
import './App.css';
import {CharacterCard} from './components/CharacterCard';
import characterList from './characters.json';
import logo from './logo.svg';
import './mobile.css';

function App() {

  return (<React.Fragment>
            <h1>Paradis Crew</h1>
            {characterList.map(character=><CharacterCard 
              key={character.name}
              name={character.name}
              lastname={character.lastname}
              position={character.position} 
              country={character.country} 
              company={character.company}
              quote={character.quote} />)}

            <div className="react">
              <p>Powered by React.</p>
              <img src={logo} className="reactLogo" alt="logo" />
            </div>  
          </React.Fragment>
          );
}

export default App;
