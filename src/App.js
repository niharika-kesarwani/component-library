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

const componentRoutes = [
  {
    name: "Avatar",
    path: "/avatar",
    route: <Avatar />,
  },
  {
    name: "Card",
    path: "/card",
    route: <Card />,
  },
  {
    name: "Alert",
    path: "/alert",
    route: <Alert />,
  },
  {
    name: "Badge",
    path: "/badge",
    route: <Badge />,
  },
  {
    name: "Button",
    path: "/button",
    route: <Button />,
  },
  {
    name: "Heading",
    path: "/heading",
    route: <Heading />,
  },
  {
    name: "Text",
    path: "/text",
    route: <Text />,
  },
  {
    name: "Image",
    path: "/image",
    route: <Image />,
  },
];

const Sidebar = () => {
  return (
    <nav>
      <ul>
        {componentRoutes.map(({ name, path }, index) => {
          return (
            <li key={index}>
              <NavLink to={path}>{name}</NavLink>
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
    {
      name: "Home",
      path: "/",
      route: <Home />,
    },
    {
      name: "Components",
      path: "/components",
      route: <Components />,
    },
    ...componentRoutes,
  ];

  return (
    <div className="App">
      <Header />
      <div className="content">
        {showSidebar && <Sidebar />}
        <Routes>
          {pathRoutes.map(({ path, route }, index) => (
            <Route path={path} element={route} key={index}></Route>
          ))}
        </Routes>
      </div>
    </div>
  );
}

export { componentRoutes };
