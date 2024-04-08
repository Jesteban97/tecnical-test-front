import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React, { useState } from "react";
import useChargeService from "./hooks/charge-service.hook";
import { useNavigate } from "react-router-dom";

const ViewBalance = () => {
  const [cell, setCell] = useState("");
  const [document, setDocument] = useState("");
  const { viewBalance } = useChargeService();
  const navigate = useNavigate();

  const handleView = async () => {
    await viewBalance(cell, document)
      .then((data) => {
        alert(`${data}`);
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
      </div>
      <div>
        <Button
          className="button"
          label="regresar"
          onClick={() => navigate("/main")}
        />

        <Button
          className="button"
          label="Ver Saldo"
          disabled={!document || !cell}
          onClick={() => handleView()}
        />
      </div>
    </div>
  );
};

export default ViewBalance;
