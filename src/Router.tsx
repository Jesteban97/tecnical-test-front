import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Recharge from "./components/Recharge";
import Register from "./components/Register";
import ViewBalance from "./components/ViewBalance";
import Main from "./components/Main";

const Router = () => {
    return (
        <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={
                <Login/>
              }
            />
            <Route
              path="/Recharge"
              element={
                <Recharge/>
              }
            />
            <Route
              path="/Register"
              element={
                <Register/>
              }
            />
            <Route
              path="/balance"
              element={
                <ViewBalance/>
              }
            />
            <Route
              path="/main"
              element={
                <Main/>
              }
            />
            
            <Route path="*" element={<h2>Ups... Algo ha salido mal...</h2>} />
          </Routes>
        </BrowserRouter>
      );
}

export default Router