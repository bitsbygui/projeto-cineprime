import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {toast} from 'react-toastify';
import api from "../../services/api";

import Loading from "../../componentes/Loading";
import MovieDetails from "../../componentes/MovieDetails";
import ActionButtons from "../../componentes/ActionButtons";

function Filme() {
  const { id } = useParams();
  const { navigate } = useNavigate();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "c419f425e01660f266e4f40cda8f0b18",
            language: "pt-BR",
          },
        })
        .then((response) => {
          console.log(response.data);
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
          navigate("/",{replace:true});
        });
    }

    loadFilmes();

    return () => {
      console.log("Componente foi desmotado");
    };
  }, [navigate, id]);

  function salvarFilme(){
    const minhaLista = localStorage.getItem("@cineprime");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filme.id);

    if (hasFilme){
      toast.warn("Esse Filme já está na Lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@cineprime",JSON.stringify(filmesSalvos));
    toast.success("Filme Salvo com Sucesso!");
  }


  if (loading) {
    return <Loading text="Carregando detalhes..." />
  }

  return (
    <section className="mx-auto my-5 flex flex-col items-center justify-center px-2 gap-4 max-w-[800px] ">
      
     <MovieDetails filme={filme} />
     <ActionButtons filme={filme} salvarFilme={salvarFilme} />

    </section>
  );
}

export default Filme;
