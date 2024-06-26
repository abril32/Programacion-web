import React, { useEffect, useState } from 'react';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null); // State to hold pagination info

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCharacters(data.results);
        setInfo(data.info); // Set pagination info
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters();
  }, []);

  const handleNextPage = async () => {
    try {
      const response = await fetch(info.next);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.error('Error fetching next page:', error);
    }
  };

  const handlePrevPage = async () => {
    try {
      const response = await fetch(info.prev);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.error('Error fetching previous page:', error);
    }
  };

  return (
    <div>
      <h2>Rick and Morty Characters</h2>
      <ul className='grilla alinear'>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name}
            <br />
            <img src={character.image} alt={character.name} />
          </li>
        ))}
      </ul>
      <div>
        {/*si existe (&&)entonces pasa lo siguiente */}
        {info && (
          <div>
            {info.prev && <button onClick={handlePrevPage}>Previous Page</button>}
            {info.next && <button onClick={handleNextPage}>Next Page</button>}
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterList;