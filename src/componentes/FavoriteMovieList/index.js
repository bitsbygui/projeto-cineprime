import { Link } from "react-router-dom";


function FavoriteMovieList({ filmes, excluirFilme }) {
  return (
    <ul className="space-y-8">
      {filmes.map((item) => {
        return (
          <li className="flex justify-between items-center" key={item.id}>
            <span className=" text-sm sm:text-lg">{item.title}</span>
            <div className=" space-x-2 flex justify-center items-center text-sm sm:text-base">
              <Link
                className="bg-flora p-2 sm:p-3 rounded-md font-semibold transition all hover:bg-evening-blue hover:text-flora "
                to={`/filme/${item.id}`}
              >
                Ver detalhes
              </Link>
              <button
                className="bg-quicksilver transition-all hover:bg-red/70 p-2 sm:p-3 rounded-md text-evening-blue hover:text-white font-semibold"
                onClick={() => excluirFilme(item.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FavoriteMovieList;
