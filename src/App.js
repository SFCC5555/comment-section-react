import React from 'react';
import './App.css';
import {CharacterCard} from './components/CharacterCard'
import characterList from './characters.json'

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
          </React.Fragment>
          );
}

export default App;
