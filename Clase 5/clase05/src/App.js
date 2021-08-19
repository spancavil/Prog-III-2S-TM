import Movie from "./components/Movie/Movie";
import MyList from "./components/MyList/MyList";

function App() {
  let personas = ["Sebas", "Guido", "Alejandro"];
  let movies = [
    {title: "Titanic", genre: "drama"},
    {title: "Avatar", genre: "accion"},
    {title: "Wall-e", genre: "animacion"}
  ]

  return (
    <div className="App">

          <MyList pers={personas}></MyList>
          
          {/*Agarramos el arrays "movies" que declaramos previamente
          y mappeamos cada elemento del array (similar a un forEach) y devolvemos un
          componente "Movie" cuyas props serán el title y el genre (además de la key, para que React no nos lance warnings) */}
          {movies.map(function(movie, index){
            return (  
              <Movie key={index} title={movie.title} genre={movie.genre}></Movie>
            )
          })}

    </div>
  );
}

export default App;
