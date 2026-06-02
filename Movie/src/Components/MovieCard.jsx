import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300'>
        <img 
        src={movie.Poster}
        alt={movie.Title}
        className='w-full h-80 object-cover'/>

        <div className='p-4 text-white'>
            <h2 className='text-xl font-bold mb-2'>{movie.Title}</h2>
            <p className='text-gray-400'>{movie.Year}</p>
        </div>
    </div>
  )
}

export default MovieCard