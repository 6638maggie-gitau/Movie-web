import React from 'react'

const SearchBar = ({search, setSearch,searchMovies}) => {

  return (
    <div>
        <input type="text" 
        placeholder='Search movie...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='px-4 py-3 rounded-lg w-72 outline-none'/>

        <button onClick={searchMovies} className='bg-red-500 text-white px-4 py-2 rounded-ld'>Search</button>
    </div>
  )
}

export default SearchBar