
import "./bootstrap.min.css";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Films from "./components/Films";
export default function Home() {
  /* l'input searche */
  const [query, setQuery] = useState("");
  /* list movies */
  const [movies, setMovies] = useState([]);
  /* EROOR */
  const [error, setError] = useState("");
  /* selected  */
    const [selected, setSelected] = useState("");
function UpdateSelect(Value) {
    setSelected(Value);
  }
  function UpdateInput(Value) {
    setQuery(Value);
  }
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${selected}&apikey=c43df2f0`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search || []);
      })
      .catch((error) => setError(error));
  }, [selected]);

  function filterArray(){
  if (query.trim() !== "") {
      const Filter = movies.filter((elem)=>{
      return elem.Title.toLowerCase().includes(query)
    })
    return Filter ;
  }else{
   return movies ;
  }
  }
  return (
    <div className="container bg-dark ">
     
      <Search searche={query} setSearche={UpdateInput} selected={selected} setSelected={UpdateSelect}/>
      <Films movies={movies} Filter={filterArray}/>
       {error && <p className="mt-3 text-light">{error}</p>}
      {movies.length === 0 && !error && (
        <p className="mt-3 text-light">Aucun film pour le moment…</p>
      )}
    </div>
  );
}

