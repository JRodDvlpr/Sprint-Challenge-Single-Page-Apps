import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import {Link} from 'react-router-dom';

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setCharacter(res.data.results);
        setSearchResults(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);
  if (!searchResults)
  return (
    <div>Loading</div>
  )
  
  return (
    <section className="character-list">
      <Link to='/'>Home</Link>
      <SearchForm setSearchResults={setSearchResults} characters={character} />
      <div className='card-container'>
        {searchResults.map(data => {
          return <CharacterCard character={data} key={data.id} name={data.name} species={data.species} status={data.status} image={data.image}/>
        })}
      </div>
    </section>
  );
}
