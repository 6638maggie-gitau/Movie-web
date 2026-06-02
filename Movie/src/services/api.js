const API_Key = "580bb3d5"
export const fetchMovies =async (movieName) =>
{
    const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_Key}`)
    const data = await response.json()
    console.log(data)
    
    return data.Search || []
}