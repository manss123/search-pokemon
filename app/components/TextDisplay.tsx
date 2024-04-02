export default function TextDisplay({topic, pokemonData} : {topic : string, pokemonData : string}) {
    return (
      <div className="bg-white text-lg">
        <span className="px-6">{topic}:</span>
        <span className="px-6">{pokemonData}</span>
      </div>
    );
}