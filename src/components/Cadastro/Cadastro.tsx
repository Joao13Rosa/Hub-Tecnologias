import React, { useContext } from "react";
import { DivGeral, DivTitulo, DivForm } from "./style";
import "./style.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserCadastroContext } from "../../Provider/cadastro/index";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const { onSubmit, register, handleSubmit, errors } =
    useContext(UserCadastroContext);

  const navigate = useNavigate();

  return (
    <DivGeral>
      <DivTitulo>
        <h1>Kenzie Hub</h1>
        <button onClick={() => navigate("/")}>Voltar</button>
      </DivTitulo>
      <DivForm>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name?.message && <span>{errors.name.message}</span>}

          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
          />
          {errors.email?.message && <span>{errors.email.message}</span>}

          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password?.message && <span>{errors.password.message}</span>}

          <label>Confirmar senha</label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <span>{errors.confirmPassword.message}</span>
          )}

          <label>Bio</label>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio?.message && <span>{errors.bio.message}</span>}

          <label>Contato</label>
          <input
            type="number"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact?.message && <span>{errors.contact.message}</span>}

          <label>Selecionar módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option value="inicio">...</option>
            <option value="Primeiro Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
            <option value="Terceiro Módulo">Terceiro Módulo</option>
          </select>

          <button>Cadastrar</button>
        </form>
      </DivForm>
      <ToastContainer />
    </DivGeral>
  );
};

export default Cadastro;
