import React, { useContext } from "react";
import { DivGeral, FormLogin } from "./style";
import "./style.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserLoginContext } from "../../Provider/login/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { onSubmit, register, handleSubmit, errors } =
    useContext(UserLoginContext);

  const navigate = useNavigate();

  return (
    <DivGeral>
      <h1>Kenzie Hub</h1>
      <FormLogin onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <label>E-mail</label>
        <input
          type="e-mail"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email?.message && <span>{errors.email.message}</span>}

        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password?.message && <span>{errors.password.message}</span>}

        <button>Entrar</button>

        <p>Ainda não possui uma conta?</p>

        <button onClick={() => navigate("cadastro")}>Cadastre-se</button>
      </FormLogin>
      <ToastContainer />
    </DivGeral>
  );
};

export default Login;
