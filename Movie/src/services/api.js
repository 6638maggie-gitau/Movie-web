const API_Key = "580bb3d5"
export const fetchMovies =async (movieName) =>
{
    try {
         const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_Key}`)
    const data = await response.json()
    
    return data.Search || [];

    }
    catch (error){
        console.error("Error fetching movies:.error")
        return []
    }
}