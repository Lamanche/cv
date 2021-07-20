import { createContext } from "react";

export let data = {
  personal: {
    name: "Madis Mets",
    occupation: "Postiljon",
    address: "Põdrakanepi 46a",
    phone: "52923819",
    email: "madis@gmail.com",
  },
  about: "Mingi jutt minust",
  experience: [
    /*{
      title: "Postiljon",
      year: "2000-2014",
      company: "Omniva",
      description: "Kandsin posti laiali",
    },*/
  ],
};

export const DataContext = createContext();
