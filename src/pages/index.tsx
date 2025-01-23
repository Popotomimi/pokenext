import { GetStaticProps } from "next";

import Image from "next/image";

interface Pokemon {
  name: string;
  url: string;
  id?: number;
}

interface HomeProps {
  pokemons: Pokemon[];
}

export const getStaticProps: GetStaticProps = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((item: Pokemon, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
};

const Home: React.FC<HomeProps> = ({ pokemons }) => {
  return (
    <>
      <div className="font-center flex justify-center items-center m-5">
        <h1 className="text-5xl">
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
      <div className="flex flex-wrap justify-between items-center max-w-4xl mx-auto">
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </>
  );
};

export default Home;
