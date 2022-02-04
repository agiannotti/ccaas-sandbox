import React from 'react';
import Pokemon from "./features/Pokemon"
function App() {
  const pokemon = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur']
  return (
    <div className="App">{pokemon.map((poke, i) =>(
      <Pokemon key={i} name={poke} />
    ))}
    </div>
  );
}

export default App;
