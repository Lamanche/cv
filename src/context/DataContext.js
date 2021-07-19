import { createContext } from "react";

export let data = {
  personal: {
    name: "",
    occupation: "",
    age: "",
  },
  about: "",
};

export const DataContext = createContext();
