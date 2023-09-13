import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { componentRoutes } from "./../../App";
import "./Home.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const inputHandler = (e) => setSearch(e.target.value);

  const buttonHandler = () => {
    setSearch("");
    const searchedRoute = componentRoutes.find(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
    if (searchedRoute) {
      navigate(searchedRoute.path);
    } else {
      toast.error("Component not found!");
    }
  };

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
        <input
          placeholder="Search for components..."
          onChange={inputHandler}
          value={search}
        />
        <button title="Search" onClick={buttonHandler}>
          Search
        </button>
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
