import { Save, Clapperboard } from "lucide-react";

const ActionButtons = ({ filme, salvarFilme }) => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={salvarFilme}
        className="flex gap-2 items-center text-lg border border-0 outline-none p-3 rounded-md cursor-pointer bg-flora font-semibold transition-all duration-500 ease-in-out hover:bg-evening-blue hover:text-flora"
      >
        <Save />
        Salvar
      </button>
      <button className="flex items-center gap-2 text-lg border border-0 outline-none p-3 rounded-md cursor-pointer bg-flora font-semibold transition-all duration-500 ease-in-out hover:bg-evening-blue hover:text-flora">
        <Clapperboard />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
        >
          Trailer
        </a>
      </button>
    </div>
  );
};

export default ActionButtons;
