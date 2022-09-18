import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  DeepRequired,
  FieldErrorsImpl,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginContextProps {
  children: ReactNode;
}

interface DataProps {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface UserCadastroContextData {
  onSubmit: (data: DataProps) => void;
  register: UseFormRegister<DataProps>;
  handleSubmit: UseFormHandleSubmit<DataProps>;
  errors: FieldErrorsImpl<DeepRequired<DataProps>>;
}

export const UserCadastroContext = createContext<UserCadastroContextData>(
  {} as UserCadastroContextData
);

export function CadastroContext({ children }: LoginContextProps) {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password")], "Senha deve ser idêntica"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: DataProps) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Cadastro realizado com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Revise e preencha os campos novamente!", {
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
    <UserCadastroContext.Provider
      value={{
        onSubmit,
        register,
        handleSubmit,
        errors,
      }}
    >
      {children}
    </UserCadastroContext.Provider>
  );
}

/* export function useUserContext(): IUserContext {
  const context = useContext(UserContext);

  return context;
} */
