import Image from "next/image";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="m-10 text-3xl font-bold">
        Explorando o Mundo dos Pokémons com Malu
      </h1>
      <Image
        className="m-auto"
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Pokemon"
      />
      <p className="m-5 w-4/5 mx-auto">
        O projeto PokeNext foi desenvolvido com o objetivo de permitir que a
        Malu explore e visualize todos os Pokémons existentes. Utilizando a API
        PokéAPI, o site proporciona uma interface intuitiva e amigável, onde os
        usuários podem navegar e descobrir as diversas espécies de Pokémons,
        suas habilidades e características únicas.
      </p>
      <p className="m-5 w-4/5 mx-auto">
        Através de um design moderno e responsivo, construído com Next.js e
        Tailwind CSS, o PokeNext oferece uma experiência imersiva, perfeita para
        fãs de todas as idades. O projeto não apenas celebra a rica diversidade
        do universo Pokémon, mas também promove a curiosidade e o aprendizado
        sobre cada criatura que habita este mundo fascinante.
      </p>
      <p className="mt-5 w-4/5 mx-auto mb-20">
        Com o PokeNext, a jornada da Malu no universo Pokémon se torna ainda
        mais mágica e informativa, conectando-se com sua paixão e curiosidade em
        descobrir cada detalhe dessas incríveis criaturas.
      </p>
    </div>
  );
};

export default About;
