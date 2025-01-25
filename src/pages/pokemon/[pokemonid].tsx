import { useEffect, useState } from "react";

import Image from "next/image";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonid: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonid;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const PokemonId = ({ pokemon }) => {
  const [imageSrc, setImageSrc] = useState<string>(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
  );

  useEffect(() => {
    const checkImage = async (src: string) => {
      try {
        const response = await fetch(src);
        if (response.ok) {
          setImageSrc(src);
        } else {
          setImageSrc("/images/fallback.png");
        }
      } catch (error) {
        setImageSrc("/images/fallback.png");
      }
    };

    checkImage(imageSrc);
  }, [imageSrc]);

  return (
    <div className="text-center">
      <h1 className="capitalize rounded-lg w-2/4 mx-auto mt-10 p-2 text-white text-3xl font-bold bg-zinc-800">
        {pokemon.name}
      </h1>

      <Image
        className="m-auto"
        src={imageSrc}
        width="150"
        height="150"
        alt={pokemon.name}
      />
      <div>
        <h3 className="font-bold">Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Tipo:</h3>
        <div>
          {pokemon.types.map((item, index) => (
            <span
              className="bg-zinc-700 text-white uppercase font-bold m-1 p-1.5 pb-2.5 rounded-lg"
              key={index}>
              {item.type.name}
            </span>
          ))}
        </div>
        <div>
          <h3 className="font-bold mt-3">Altura:</h3>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h3 className="font-bold">Peso:</h3>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonId;
