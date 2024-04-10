import { Link } from 'react-router-dom';

function Erro() {
  return (
    <section className="flex flex-col justify-center items-center h-screen max-h-[86vh]">
      <h1 className="text-9xl font-bold mb-4 text-evening-blue">404</h1>
      <h2 className='text-xl font-bold mb-4 text-evening-blue'>Página não encontrada!</h2>
      <Link className="cursor-pointer bg-flora px-2 sm:px-4 py-2 no-underline font-semibold rounded-md text-evening-blue hover:bg-evening-blue hover:text-flora transition-all duration-500 ease-in-out" to="/">Veja todos os filmes</Link>
    </section>
  );
}

export default Erro;
