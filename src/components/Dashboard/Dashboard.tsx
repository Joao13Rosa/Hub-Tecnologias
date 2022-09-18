import React, { useContext } from "react";
import {
  DivGeral,
  DivTitulo,
  DivTexto1,
  DivTexto2,
  LiTechs,
  ButtonCriar,
  ButtonDelete,
  DivGeralForm,
  DivForm1,
  DivForm2,
} from "./style";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { UserDashboardContext } from "../../Provider/dashboard/ContextDashboard";
import { UserLoginContext } from "../../Provider/login/index";
import "../../App.css";
import { string } from "yup";

interface StylesProps {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
    boxSizing: any;
    backgroundColor: string;
  };
}

interface IId {
  id: number;
}

const customStyles: StylesProps = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxSizing: "border-box",
    backgroundColor: "#212529",
  },
};

Modal.setAppElement("#root");

const Dashboard = () => {
  const {
    modalIsOpen,
    openModal,
    handleClick,
    cadastroTech,
    deleteTech,
    closeModal,
    register,
    handleSubmit,
    userName,
    courseModule,
  } = useContext(UserDashboardContext);

  const { techs } = useContext(UserLoginContext);

  return (
    <DivGeral>
      <DivTitulo>
        <div>
          <h1>Kenzie Hub</h1>
          <button onClick={() => handleClick()}>Sair</button>
        </div>
      </DivTitulo>
      <DivTexto1>
        <div>
          <h2>Olá, {userName}</h2>
          <p>{courseModule}</p>
        </div>
      </DivTexto1>
      <DivTexto2>
        <div>
          <p>Tecnologias</p>
          <ButtonCriar onClick={() => openModal()}>+</ButtonCriar>
        </div>
        <ul>
          {techs.map(({ id, title, status }) => (
            <LiTechs key={id}>
              <div className="divLi1">
                <p>{title}</p>
              </div>
              <div className="divLi2">
                <p>{status}</p>
                <ButtonDelete onClick={(e) => deleteTech(id)}>X</ButtonDelete>
              </div>
            </LiTechs>
          ))}
        </ul>
      </DivTexto2>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <DivGeralForm>
          <DivForm1>
            <h2>Cadastrar Tecnologia</h2>
            <p onClick={closeModal}>X</p>
          </DivForm1>
          <DivForm2>
            <form onSubmit={handleSubmit(cadastroTech)}>
              <label>Nome</label>
              <input
                type="text"
                placeholder="Digite sua tecnologia"
                {...register("title")}
              />

              <label>Selecionar status</label>
              <select id="" {...register("status")}>
                <option value="nulo">...</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>

              <button>Cadastrar Tecnologia</button>
            </form>
          </DivForm2>
        </DivGeralForm>
      </Modal>
    </DivGeral>
  );
};

export default Dashboard;
