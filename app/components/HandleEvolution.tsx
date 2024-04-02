import React from 'react';

interface Evolution {
  id: string;
  number: string;
  name: string;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
}

interface Props {
  evolutions: Evolution[] | null;
}



const HandleEvolutions: React.FC<Props> = ({ evolutions }) => {


  if (!evolutions) {
    return (
      <p className="topic-bg m-10 text-center text-md p-8 text-emerald-50 rowdies-bold">
        No evolutions available
      </p>
    );
  }

  return (
    <div>
      <p className="topic-bg m-10 text-center text-4xl p-8 text-emerald-50 rowdies-bold">
        Evolution
      </p>
      {evolutions.map((evolution, index) => (
        <div key={index} className="bg-white text-lg m-10 p-4">
          <span className="px-6">Name:</span>
          <a href={`/${evolution.name}`} className="px-6 text-sky-400">
            {evolution.name}
          </a>
          <p>Classification: {evolution.classification}</p>
          <p>Types: {evolution.types && evolution.types.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default HandleEvolutions;
