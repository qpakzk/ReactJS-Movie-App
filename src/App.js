import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  { 
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/91HQ3kSAxhL._SL1500_.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR79,0,630,1200_AL_.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://movieswithaplottwist.com/wp-content/uploads/2016/04/old-boy-movie-poster.jpg"
  },
  {
    title: "Star wars",
    poster: "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        {
          movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
          })
        }

      </div>
    );
  }
}

export default App;
