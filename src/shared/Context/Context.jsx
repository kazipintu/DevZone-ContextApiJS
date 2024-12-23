/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const contextAPI = createContext();
const Context = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  // example-1 //
  const nameList = [
    "Jayeed", "Hossain", "Anika"
  ]

  const student = {
    name: "Basar",
    age: "25",
    dept: "law"
  }

  const data = { nameList, student, isOpen, setIsOpen };

  return (
    <contextAPI.Provider value={data}>
      {children}
    </contextAPI.Provider>
  );
};

export default Context;