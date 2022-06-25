import { useContext, createContext, useState } from "react";

type PasswordContextTypes = {
  password: string;
  changePassword: (value: string) => void;
};

const PasswordContext = createContext({} as PasswordContextTypes);

type PasswordProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export function PasswordProvider({ children }: PasswordProviderProps) {
  const [ password, setPassword ] = useState('');

  function changePassword(value: string) {
    setPassword(value);
  }

  return (
    <PasswordContext.Provider value={{
      password,
      changePassword
    }}>
      { children }
    </PasswordContext.Provider>
  )
}

export function usePassword() {
  return useContext(PasswordContext);
}