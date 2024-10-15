import React from 'react'; // Import React library

// Define a functional component named MovieCard that takes a 'movie' prop
const MovieCard = ({ movie }) => {
  // If no movie is provided, render nothing
  if (!movie) return null;

  // If a movie is provided, render the card
  return (
    <div className="movie-card"> {/* Main container for the movie card */}
      <h2 className="movie-title">{movie.Title}</h2> {/* Display movie title */}
      
      {/* Display movie poster image */}
      <img src={movie.Poster} alt={`${movie.Title} poster`} className="movie-poster" />
      
      <div className="movie-details"> {/* Container for movie details */}
        <p><strong>Release Year:</strong> {movie.Year}</p> {/* Display release year */}
        <p><strong>Plot:</strong> {movie.Plot}</p> {/* Display movie plot */}
        
        <div className="movie-ratings"> {/* Container for ratings */}
          <h3>Ratings:</h3>
          <ul>
            {/* Map through the ratings array and display each rating */}
            {movie.Ratings.map((rating, index) => (
              <li key={index}>{rating.Source}: {rating.Value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard; // Export the component for use in other files