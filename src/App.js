import "./styles.css";
import { NavLink, useLocation, Routes, Route } from "react-router-dom";
import { Header, Home, Components } from "./pages";
import {
  Avatar,
  Card,
  Alert,
  Badge,
  Button,
  Heading,
  Text,
  Image,
} from "./components";

const Sidebar = () => {
  const links = [
    "avatar",
    "alert",
    "badge",
    "button",
    "card",
    "heading",
    "text",
    "image",
  ];

  return (
    <nav>
      <ul>
        {links.map((link, index) => {
          const route = `/${link}`;
          const name = `${link[0].toUpperCase()}${link.slice(1)}`;
          return (
            <li key={index}>
              <NavLink to={route}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default function App() {
  const location = useLocation();
  const showSidebar = !(
    location.pathname === "/" || location.pathname === "/components"
  );
  const pathRoutes = [
    { path: "/", route: <Home /> },
    { path: "/components", route: <Components /> },
    { path: "/avatar", route: <Avatar /> },
    { path: "/card", route: <Card /> },
    { path: "/alert", route: <Alert /> },
    { path: "/badge", route: <Badge /> },
    { path: "/button", route: <Button /> },
    { path: "/heading", route: <Heading /> },
    { path: "/text", route: <Text /> },
    { path: "/image", route: <Image /> },
  ];

  return (
    <div className="App">
      <Header />
      <div>
        {showSidebar && <Sidebar />}
        <div>
          <Routes>
            {pathRoutes.map(({ path, route }, index) => (
              <Route path={path} element={route} key={index}></Route>
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}
