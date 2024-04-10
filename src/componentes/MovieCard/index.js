import { Link } from "react-router-dom";
import { ListCollapse } from "lucide-react";



const MovieCard = ({filme}) => {
  return (
    <article
      className="rounded-md p-4 w-full flex flex-col transform transition-all duration-300 hover:scale-105 drop-shadow-md hover:drop-shadow-xl"
      key={filme.id}
    >
      <img
        className=" w-full max-w-full object-cover "
        src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
        alt={filme.title}
      />
      <Link
        className="flex items-center justify-center gap-2 text-md bg-flora text-evening-blue font-bold rounded-bl-lg rounded-br-lg h-10 hover:text-flora hover:bg-evening-blue transition-all duration-500 ease-in-out"
        to={`/filme/${filme.id}`}
      >
        <ListCollapse />
        Ver detalhes
      </Link>
    </article>
  );
}

export default MovieCard;
