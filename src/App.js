import "./styles.css";
import { NavLink, useLocation, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header, Home, Components } from "./pages";
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Heading,
  Image,
  Text,
} from "./documentation";

const componentRoutes = [
  {
    name: "Alert",
    path: "/alert",
    route: <Alert />,
  },
  {
    name: "Avatar",
    path: "/avatar",
    route: <Avatar />,
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
    name: "Card",
    path: "/card",
    route: <Card />,
  },
  {
    name: "Heading",
    path: "/heading",
    route: <Heading />,
  },
  {
    name: "Image",
    path: "/image",
    route: <Image />,
  },
  {
    name: "Text",
    path: "/text",
    route: <Text />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <nav className="sidebar">
      {componentRoutes.map(({ name, path }, index) => {
        return (
          <NavLink
            key={index}
            to={path}
            title={name}
            className={
              location.pathname === path ? "navlink navlink_select" : "navlink"
            }
          >
            {name}
          </NavLink>
        );
      })}
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
      <Toaster position="top-right" />
      <Header />
      <div className={showSidebar ? "content content_w_sb" : "content"}>
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
