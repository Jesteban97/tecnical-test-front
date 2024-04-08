import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import useChargeService from "./hooks/charge-service.hook";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [cell, setCell] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { createAccount } = useChargeService();
  const navigate = useNavigate();
  const handleCreate = async () => {
    const data = {
      cell,
      document,
      name,
      email,
    };
    
    await createAccount(data)
      .then((data) => {
        alert(`usuario ${data.name}`);
        navigate("/main")
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="container">
        <div className="spacing-divs">
          <span className="p-float-label">
            <InputText
              id="celular"
              value={cell}
              onChange={(e) => setCell(e.target.value)}
            />
            <label htmlFor="celular">Celular</label>
          </span>
        </div>
        <div className="spacing-divs">
          <span className="p-float-label">
            <InputText
              id="documento"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
            />
            <label htmlFor="documento">Documento</label>
          </span>
        </div>
        <div className="spacing-divs">
          <span className="p-float-label">
            <InputText
              id="email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Correo Electronico</label>
          </span>
        </div>
        <div className="spacing-divs">
          <span className="p-float-label">
            <InputText
              id="nombres"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="nombres">Nombres</label>
          </span>
        </div>
      </div>
      <div>
        <Button
          className="button"
          label="Submit"
          onClick={() => handleCreate()}
          disabled={!cell || !document || !name || !email}
        />
      </div>
    </div>
  );
};

export default Register;
