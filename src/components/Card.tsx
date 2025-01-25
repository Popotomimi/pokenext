import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Pokemon {
  id: number;
  name: string;
}

interface CardProps {
  pokemon: Pokemon;
}

const Card = ({ pokemon }: CardProps) => {
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
  }, []);

  return (
    <div className="flex justify-center items-center flex-col p-8 m-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg border border-red-500 shadow-lg bg-zinc-800 text-white">
      <Image src={imageSrc} width="120" height="120" alt={pokemon.name} />
      <p className="m-3 text-white font-bold rounded-sm bg-red-500 p-1">
        #{pokemon.id}
      </p>
      <h3 className="capitalize text-xl font-bold mb-5">{pokemon.name}</h3>
      <Link
        className="btn rounded p-2 bg-white font-bold text-zinc-800 hover:text-red-500"
        href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </div>
  );
};

export default Card;
