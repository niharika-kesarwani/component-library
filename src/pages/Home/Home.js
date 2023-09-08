import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="link heading" title="CSS Library">
        CSS Library
      </NavLink>
      <div className="navlink">
        <NavLink to="/" className="link" title="Home">
          Home
        </NavLink>
        <NavLink to="/components" className="link" title="Components">
          Components
        </NavLink>
      </div>
      <div className="search">
        <input placeholder="Search for components..." />
        <button title="Search">Search</button>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home_wrapper">
      <div className="title">Your Unique Component Library</div>
      <div className="description">
        A collection of innovative components for modern web development.
      </div>
      <button title="Get Started" onClick={() => navigate("/components")}>
        Get Started
      </button>
    </div>
  );
};

export { Header, Home };
