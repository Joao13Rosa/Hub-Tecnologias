import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  Key,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  DeepRequired,
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserDashboardContext } from "../dashboard/ContextDashboard";

export const UserLoginContext = createContext<UserLoginContextData>(
  {} as UserLoginContextData
);

interface LoginContextProps {
  children: ReactNode;
}

interface DataProps {
  email: string;
  password: string;
}

interface ITechsProps {
  status: ReactNode;
  title: ReactNode;
  id: Key | null | undefined;
  techs?: string[];
}

interface UserLoginContextData {
  onSubmit: (data: DataProps) => void;
  register: UseFormRegister<DataProps>;
  handleSubmit: UseFormHandleSubmit<DataProps>;
  errors: FieldErrorsImpl<DeepRequired<DataProps>>;
  techs: ITechsProps[];
  setTechs: Dispatch<SetStateAction<ITechsProps[]>>;
}

export function LoginContext({ children }: LoginContextProps) {
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(UserDashboardContext);
  const { courseModule, setCourseModule } = useContext(UserDashboardContext);
  const [techs, setTechs] = useState<ITechsProps[]>([]);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    resolver: yupResolver(formSchema),
  });

  let token = localStorage.getItem("@kenzie-hub:token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const onSubmit = (data: DataProps) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        localStorage.setItem("@kenzie-hub:token", response.data.token);
        toast.success("Login efetuado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        navigate("dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("E-mail ou senha incorreto!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <UserLoginContext.Provider
      value={{
        onSubmit,
        register,
        handleSubmit,
        errors,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserLoginContext.Provider>
  );
}
