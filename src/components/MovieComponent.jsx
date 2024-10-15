import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import MovieCard from './MovieCard'; // Import the MovieCard component

const MovieComponent = () => {
  // State to store the list of movies
  const [movies, setMovies] = useState([]);
  // State to store the currently selected movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Array of movie titles to fetch
  const movieTitles = ['Caddyshack', 'Blade Runner 2049', 'Anchorman: The Legend of Ron Burgundy'];

  useEffect(() => {
    // Function to fetch movie data from the API
    const fetchMovies = async () => {
      const apiKey = 'd2fb9d49'; // API key for OMDb API
      // Create an array of promises, each fetching data for one movie
      const moviePromises = movieTitles.map(title =>
        fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`)
          .then(response => response.json())
      );
      // Wait for all promises to resolve and get the movie data
      const movieData = await Promise.all(moviePromises);
      // Update the movies state with the fetched data
      setMovies(movieData);
    };

    fetchMovies(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on component mount

  // Function to handle movie selection
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="movie-container">
      <div className="movie-buttons">
        {/* Map through the movies array to create buttons for each movie */}
        {movies.map((movie, index) => (
          <button 
            key={index}
            onClick={() => handleSelectMovie(movie)}
            className="movie-button"
          >
            {movie.Title}
          </button>
        ))}
      </div>
      {/* Render the MovieCard component, passing the selected movie as a prop */}
      <MovieCard movie={selectedMovie} />
    </div>
  );
};

export default MovieComponent; // Export the component for use in other files