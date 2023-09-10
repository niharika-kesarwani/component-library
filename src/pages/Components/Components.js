import { useNavigate } from "react-router-dom";
import { componentRoutes } from "../../App";
import "./Components.css";

const Components = () => {
  const navigate = useNavigate();

  return (
    <div className="components">
      <h1>All Components</h1>
      <ul>
        {componentRoutes.map(({ name, path }, index) => (
          <div key={index} title={name} onClick={() => navigate(path)}>
            {name}
          </div>
        ))}
      </ul>
    </div>
  );
};

export { Components };
