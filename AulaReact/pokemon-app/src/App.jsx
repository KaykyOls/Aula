// Etapa 01 - Primeira versão (Fixo no Pikachu)
import { useState } from "react";
import "./App.css";
// pega código de outro lugar

function App() {
  const [pokemon, setPokemon] = useState(null);
  // váriavel que atualiza

  async function buscarPokemon() {
    // função que busca o dado
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/rayquaza");
    // localização do dado
    const dados = await resposta.json();
    // armazena resposta váriavel
    setPokemon(dados);
  }

  return (
    <div>
      <h1>Pokémon</h1>
      {/* com o clique do botão, aciona a função "buscar pokemon" */}
      <button onClick={buscarPokemon}>Buscar Pokémon</button>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Número: {pokemon.id}</p>
        </div>
      )}
    </div>
  );
}

export default App;
