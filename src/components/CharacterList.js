import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import {Link} from 'react-router-dom';

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setCharacter(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <section className="character-list">
      <Link to='/'>Home</Link>
      <SearchForm characters={character} />
      <div className='card-container'>
        {character.map(data => {
          return <CharacterCard character={data} key={data.id} name={data.name} species={data.species} status={data.status} image={data.image}/>
        })}
      </div>
    </section>
  );
}
