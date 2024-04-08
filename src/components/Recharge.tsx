import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import useChargeService from "./hooks/charge-service.hook";
import { useNavigate } from "react-router-dom";

const Recharge = () => {
  const [cell, setCell] = useState("");
  const [document, setDocument] = useState("");
  const [amount, setAmount] = useState(0);
  const { rechargeAccount } = useChargeService();
  const navigate = useNavigate();

  const handleRecharge = async () => {
    const data = {
      document,
      cell,
      amount: parseFloat(`${amount}`).toFixed(2),
    };
    await rechargeAccount(data)
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
        <div className="spacing-divs">
          <span className="p-float-label">
            <InputNumber
              inputId="cantidad"
              value={amount}
              onValueChange={(e) => setAmount(e.value ?? 0)}
              mode="currency"
              currency="USD"
              locale="en-US"
            />

            <label htmlFor="cantidad">cantidad</label>
          </span>
        </div>
      </div>
      <div>
        <Button
          className="button"
          label="Regresar"
          onClick={() => navigate("/main")}
        />

        <Button
          className="button"
          label="Recargar"
          disabled={!cell || !document || !amount}
          onClick={() => handleRecharge()}
        />
      </div>
    </div>
  );
};

export default Recharge;
