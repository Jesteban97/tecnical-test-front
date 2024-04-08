import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [cell, setCell] = useState("");
  const [document, setDocument] = useState("");
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
      <Button className="button" label="Submit" onClick={()=>navigate('/main')}/>
      </div>
    </div>
  );
};

export default Login;
