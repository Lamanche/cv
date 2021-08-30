import { createContext } from "react";

export let data = {
  personal: {
    image: "",
    name: "Madis Mets",
    occupation: "Postiljon",
    address: "Põdrakanepi 46a",
    phone: "52923819",
    email: "madis@gmail.com",
  },
  about: "",
  experience: [],
  education: [],
};

export const DataContext = createContext();
