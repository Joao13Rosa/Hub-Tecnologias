import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Global } from "./Global";
import { LoginContext } from "./Provider/login/index";
import { CadastroContext } from "./Provider/cadastro/index";
import { DashboardContext } from "./Provider/dashboard/ContextDashboard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContext>
        <CadastroContext>
          <DashboardContext>
            <App />
          </DashboardContext>
        </CadastroContext>
      </LoginContext>
    </BrowserRouter>
    <Global />
  </React.StrictMode>
);
