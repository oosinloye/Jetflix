import React, { useState, useEffect } from 'react'
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

// 5e03309a

const API_URL = 'http://www.omdbapi.com?apikey=5e03309a'


// fetch data from api when it loads
const App = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); // inits response
        const data = await response.json(); // gets the data

        setMovies(data.Search);
    }
    
    useEffect(() => {
        searchMovies('Spiderman')
    }, []);
    
    return (
        <div className = "app">
            <hl> Jetflix</hl>

            <div className = "search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder = "Search for Movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                    />
                    </div>

                    {movies?.length > 0 ? (
                            <div className ="contatiner">
                                {movies.map((movie) => (
                                    <MovieCard movie = {movie}/>
                                ))}
                            </div>
                        ) : (
                            <div className = "empty">
                                <h2>No movies found</h2>
                            </div>
                        )}
        </div>
    );
};

export default App;