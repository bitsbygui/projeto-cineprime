


const MovieDetails = ({ filme }) => {
  return (
    <>
      <h1 className="my-3 text-evening-blue text-4xl font-bold">
        {filme.title}
      </h1>
      <img
        className="rounded-lg w-[800px] max-w-full max-h-[340px] object-cover drop-shadow-lg"
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3 className="text-evening-blue text-lg font-bold">Sinopse</h3>
      <span className="text-justify mx-2">{filme.overview}</span>

      <div className="grid grid-cols-3 gap-3 w-full my-11">

        <div className="flex flex-col items-center gap-2 bg-quicksilver p-3 rounded-lg">
          <strong>Avaliação</strong>
          <span>{filme.vote_average.toFixed(1)}/10</span>
        </div>
        <div className="flex flex-col items-center gap-2 bg-quicksilver p-3 rounded-lg">
          <strong>Lançamento</strong>
          <span>{new Date(filme.release_date).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col items-center gap-2 bg-quicksilver p-3 rounded-lg">
          <strong>Duração</strong>
          <span>{filme.runtime} min</span>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
