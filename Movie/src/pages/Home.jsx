import React, {useState} from 'react'
import SearchBar from '../Components/SearchBar'
import MovieCard from '../Components/MovieCard'
import Loader from '../Components/Loader'
import {fetchMovies} from '../services/api'

const Home = () => {
    const [search, setSearch] =useState("")
    const [movies, setMovies] =useState([])

    const [loading, setLoading] =useState (false)

    const searchMovies = async () => {
        try{
            setLoading(true)
            const data = await fetchMovies(search)
            console.log(data)
            setMovies(data)
        }
        catch (error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <div>
        <SearchBar
        search={search}
        setSearch={setSearch}
        searchMovies={searchMovies}/>

        {loading ?(
            <Loader />
        ):
        (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
                {movies.map((movie) =>( <MovieCard
                    key={movie.imdbID}
                    movie={movie} />
                ))}
            </div>
        )
        }
    </div>
  )
}

export default Home