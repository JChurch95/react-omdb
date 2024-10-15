import React from 'react';
import MovieComponent from './components/movieComponent';

function App() {
  return (
    // Line 6: Applies the .app-container class from index.css
    <div className="app-container">
      {/* Line 7: Applies the .title class from index.css to h1 element */}
      <h1 className="title">Jordan's Movie Database</h1>
      <MovieComponent />
    </div>
  )
}

export default App;