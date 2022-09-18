import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import { useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserLoginContext } from "../login/index";

interface DashboardContextProps {
  children: ReactNode;
}

interface DataProps {
  title: string;
  status: string;
}

interface IUserProps {
  name: string;
}

interface UserDashboardContextData {
  modalIsOpen: boolean;
  openModal: () => void;
  handleClick: () => void;
  cadastroTech: (data: DataProps) => void;
  deleteTech: (e: any) => void;
  closeModal: () => void;
  register: UseFormRegister<DataProps>;
  handleSubmit: UseFormHandleSubmit<DataProps>;
  userName: string;
  courseModule: string;
  setUserName: Dispatch<SetStateAction<string>>;
  setCourseModule: Dispatch<SetStateAction<string>>;
}

export const UserDashboardContext = createContext<UserDashboardContextData>(
  {} as UserDashboardContextData
);

export function DashboardContext({ children }: DashboardContextProps) {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { techs, setTechs } = useContext(UserLoginContext);
  const [userName, setUserName] = useState<string>("");
  const [courseModule, setCourseModule] = useState<string>("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleClick() {
    navigate("/");
    localStorage.clear();
  }

  let token = localStorage.getItem("@kenzie-hub:token");

  const { register, handleSubmit } = useForm<DataProps>({});

  function atualizacaoTechs() {
    axios
      .get(`https://kenziehub.herokuapp.com/profile`, config)
      .then((response) => {
        console.log(response);
        setTechs(response.data.techs);
        setUserName(response.data.name);
        setCourseModule(response.data.course_module);
      })
      .catch((err) => console.log(err));
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const cadastroTech = (data: DataProps) => {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, config)
      .then((response) => {
        setTechs([...techs, response.data]);
        closeModal();
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const deleteTech = (id: string) => {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, config)
      .then((response) => {
        console.log(response);
        atualizacaoTechs();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/profile`, config)
      .then((response) => {
        setTechs(response.data.techs);
        setUserName(response.data.name);
        setCourseModule(response.data.course_module);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserDashboardContext.Provider
      value={{
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
        setUserName,
        setCourseModule,
      }}
    >
      {children}
    </UserDashboardContext.Provider>
  );
}
