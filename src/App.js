import "./styles.css";
import { NavLink, useLocation, Routes, Route } from "react-router-dom";
import { Header } from "./pages/Home/Home";
import { Home } from "./pages/Home/Home";
import { Components } from "./pages/Components/Components";
import { Avatar } from "./components/Avatar/Avatar";
import { Card } from "./components/Card/Card";
import { Alert } from "./components/Alert/Alert";
import { Badge } from "./components/Badge/Badge";
import { Button } from "./components/Button/Button";
import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { Image } from "./components/Image/Image";

const Sidebar = () => {
  const links = [
    "avatar",
    "alert",
    "badge",
    "button",
    "card",
    "heading",
    "text",
    "image"
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
    { path: "/image", route: <Image /> }
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
