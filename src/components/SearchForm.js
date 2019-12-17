import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm({ characters, setSearchResults }) {

  const [charSearch, setCharSearch] = useState('');
  // const [searchResults, setSearchResults] = useState(characters);

  useEffect(() => {
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(charSearch.toLowerCase());
    })
    setSearchResults(results);
  }, [charSearch])

  const handleChange = e => {
    setCharSearch(e.target.value);
  }

  return (
    <section>
      <form className='search-form'> 
        <label htmlFor='name'>Search:</label>
        <input
          id='name'
          type='text'
          name='textfield'
          placeholder='  enter character name'
          onChange={handleChange}
          value={charSearch}
        />
      </form>

    </section>
  );
}
