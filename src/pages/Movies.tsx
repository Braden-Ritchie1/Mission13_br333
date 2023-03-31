import { useState } from 'react';
import data from '../MovieData.json';

//this file handles the movie list and offers the ability to add a single movie at the bottom of the list using state
const movies = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(movies);

  const addMovie = () => {
    setListOfMovies([
      ...movies,
      {
        Title: 'Dune',
        Category: 'Action/Adventure',
        Year: 2021,
        Director: 'Denis Villanueve',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
            </tr>
          </thead>

          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Category}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}
export default MovieList;
