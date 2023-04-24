import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        {directors.map((director) => (
          <div key={director.name}>
            {director.name}
            <div>
              {director.movies.map((movie) => (
                <li key={movie}>
                  {movie}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directors;
