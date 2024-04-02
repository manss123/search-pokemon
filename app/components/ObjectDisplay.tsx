export default function ObjectDisplay({topic, pokemonObject} : {topic : string, pokemonObject : Record<string, any>}) {
  const renderProperties = (obj: Record<string, any>): JSX.Element[] => {
    return Object.entries(obj).filter(([key]) => key !== '__typename').map(([key, value]) => {
      if (typeof value === 'object') {
        return (
          <div key={key}>
            <span className="px-6">{key}:</span>
            {renderProperties(value)}
          </div>
        );
      } else {
        return (
          <span key={key} className="px-6">
            {key}: {value}
          </span>
        );
      }
    });
  };

    return (
      <div className="bg-white text-lg">
        <span className="px-6">{topic}:</span>
        {renderProperties(pokemonObject)}
      </div>
    );
}