import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FavoriteMovieList from "../../componentes/FavoriteMovieList";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@cineprime");

    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@cineprime", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso!");
  }

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-10 flex flex-col gap-5  overflow-y-auto h-screen">
      <h1 className="font-bold text-3xl my-4">Meus Filmes Favoritos</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo!</span>}
      <FavoriteMovieList filmes={filmes} excluirFilme={excluirFilme} />
    </div>
  );
}

export default Favoritos;
