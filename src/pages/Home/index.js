import api from "../../services/api";
import { useEffect, useState } from "react";
import MovieCard from "../../componentes/MovieCard";
import { Link } from "react-router-dom";
import { ListCollapse } from "lucide-react";

import Loading from "../../componentes/Loading";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key: "c419f425e01660f266e4f40cda8f0b18",
            language: "pt-BR",
            page: 1,
          },
        });
        setFilmes(response.data.results.slice(0, 20));
        setLoading(false); // Altera o estado de loading para false após carregar os filmes
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    }
    loadFilmes();
  }, []);

  if (loading) {
    return <Loading text="Carregando os filmes..." />;
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-4xl mt-10 mb-3 font-bold text-evening-blue">
        Em exibição
      </h1>

      <div className="max-w-screen-xl mx-auto my-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center justify-center">
        {filmes.map((filme) => {
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
        })}
      </div>
    </div>
  );
}
export default Home;
