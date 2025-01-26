import { useEffect, useState } from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

interface PokemonType {
  type: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}

interface Result {
  name: string;
  url: string;
}

interface PokemonIdProps {
  pokemon: Pokemon;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // params
  const paths = data.results.map((_: Result, index: number) => ({
    params: { pokemonid: (index + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.pokemonid as string;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: Pokemon = await res.json();

  return {
    props: { pokemon: data },
  };
};

const PokemonId: React.FC<PokemonIdProps> = ({ pokemon }) => {
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
      } catch {
        setImageSrc("/images/fallback.png");
      }
    };

    checkImage(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    );
  }, [pokemon.id]);

  type PokemonTypeName =
    | "grass"
    | "poison"
    | "fire"
    | "water"
    | "bug"
    | "flying"
    | "normal"
    | "electric"
    | "ground"
    | "ghost"
    | "fairy"
    | "fighting"
    | "psychic"
    | "rock"
    | "steel"
    | "ice";

  const typeColors: Record<PokemonTypeName, string> = {
    grass: "bg-grass",
    poison: "bg-poison",
    fire: "bg-fire",
    water: "bg-water",
    bug: "bg-bug",
    flying: "bg-flying",
    normal: "bg-normal",
    electric: "bg-electric",
    ground: "bg-ground",
    ghost: "bg-ghost",
    fairy: "bg-fairy",
    fighting: "bg-fighting",
    psychic: "bg-psychic",
    rock: "bg-rock",
    steel: "bg-steel",
    ice: "bg-ice",
  };

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
              className={`${
                typeColors[item.type.name as PokemonTypeName] || "bg-default"
              } text-white uppercase font-bold m-1 p-1.5 pb-2.5 rounded-lg`}
              key={index}>
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold mt-3">Altura:</h3>
        <p>{pokemon.height * 10} cm</p>
      </div>
      <div className="mb-32">
        <h3 className="font-bold">Peso:</h3>
        <p>{pokemon.weight / 10} kg</p>
      </div>
    </div>
  );
};

export default PokemonId;
