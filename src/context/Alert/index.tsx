import { createContext } from "react";

export const AlertContext = createContext({
    alert: {
      isOpen: false,
      message: "",
    },
    setAlert: (alert: {
      isOpen: boolean;
      message: string;
    }) => {}
});