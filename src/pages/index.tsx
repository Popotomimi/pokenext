import React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Card from "../components/Card";

interface Pokemon {
  name: string;
  url: string;
  id: number;
}

interface HomeProps {
  pokemons: Pokemon[];
}

export const getStaticProps: GetStaticProps = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();
  data.results.forEach((item: Pokemon, index: number) => {
    item.id = index + 1;
  });
  return { props: { pokemons: data.results } };
};

const Home: React.FC<HomeProps> = ({ pokemons }) => {
  return (
    <>
      <div className="font-center flex justify-center items-center m-5">
        <h1 className="text-5xl m-5">
          Poke<span className="font-bold text-red-500">Next</span>
        </h1>
        <Image
          className="ml-5"
          src="/images/pokeball.png"
          width="40"
          height="40"
          alt="Pokenext"
        />
      </div>
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Home;
