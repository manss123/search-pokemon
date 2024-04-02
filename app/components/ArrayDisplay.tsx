export default function ArrayDisplay({ topic, pokemonArray }: { topic: string; pokemonArray: Record<string, any> }) {
  const renderProperties = (obj: Record<string, any>): JSX.Element[] => {
    return Object.entries(obj)
      .filter(([key]) => key !== '__typename')
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return (
            <div key={key}>
              <span className="px-6">{key}:</span>
              <div className="flex flex-wrap">
                {value.map((item: any, index: number) => (
                  <span key={index} className="px-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        } else if (typeof value === 'object') {
          return (
            <div key={key}>
              <span className="px-6">{key}:</span>
              {renderProperties(value)}
            </div>
          );
        } else {
          return (
            <span key={key} className="px-6">
               {value}
            </span>
          );
        }
      });
  };

  return (
    <div className="bg-white text-lg">
      <span className="px-6">{topic}:</span>
      {renderProperties(pokemonArray)}
    </div>
  );
}
