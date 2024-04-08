import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <span>Bienvenido:</span>
      <div>
        <div>
          <Button
            className="button"
            label="Saldo"
            onClick={() => navigate("/balance")}
          />
        </div>
        <div>
          <Button
            className="button"
            label="Recarga"
            onClick={() => navigate("/Recharge")}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
