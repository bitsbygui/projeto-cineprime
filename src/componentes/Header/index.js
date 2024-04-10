import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Star } from "lucide-react";

function Header() {
  return (
    <header className="flex flex-row items-center justify-around w-full h-auto md:h-16 bg-evening-blue pl-8 pr-8">
      <div>
        <Link className="flex items-center justify-center gap-2" to="/">
          <img className="h-7 md:h-10" src={logo} alt="Logo" />
          <span className="text-3xl font-bold cursor-pointer text-flora no-underline">
            CinePrime
          </span>
        </Link>
      </div>
      <div className="flex md:flex-row items-center justify-center md:justify-end gap-4 mb-2 mt-2">
        <Link
          className="cursor-pointer bg-flora p-2 no-underline font-semibold rounded-md text-evening-blue text-base flex gap-2"
          to="/favoritos"
        >
          <Star />
          Favoritos
        </Link>
      </div>
    </header>
  );
}
export default Header;
