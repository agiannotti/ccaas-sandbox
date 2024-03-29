import React from 'react';
import { useGetPokemonByNameQuery } from '../app/services/pokemon'


const Pokemon = ({name}:{name:string}) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name)

  return <div> {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}</div>;
};

export default Pokemon;
