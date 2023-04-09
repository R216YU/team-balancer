import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto border-b-2 font-poppins">
      <div className="px-24 py-4 flex justify-between items-center">
        <Link to={`/`}>
          <h1 className="text-2xl font-bold ">Team Balancer</h1>
        </Link>

        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to={`/VALORANT`}>
                <span className="link">VALORANT</span>
              </Link>
            </li>
            <li>
              <Link to={`/OVERWATCH`}>
                <span className="link">OVERWATCH</span>
              </Link>
            </li>
            <li>
              <Link to={`/CSGO`}>
                <span className="link">CS:GO</span>
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                <span className="link">How to use</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
