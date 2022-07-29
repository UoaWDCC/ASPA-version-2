import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <nav className="flex justify-between px-12 py-6 sans">
      <div className="flex gap-8 items-center">
        <Link to="/" className="flex gap-4 items-center">
          <img src={Logo} alt="" className="h-8" />
          <span className="font-bold text-lg">ASPA</span>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/upcoming-events">Upcoming Events</Link>
      </div>
      <div className="flex gap-8 font-bold items-center">
        <Link to="/" className="flex gap-2 items-center">
          <IoSearch size="20" />
          <span>Search</span>
        </Link>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
