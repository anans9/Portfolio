import { useContext } from "react";
import { InitialContext } from "./useContext";

export const useInitialContext = () => {
  const context = useContext(InitialContext);
  if (!context) {
    throw new Error(
      "useInitialContext must be used within an InitialContextProvider"
    );
  }
  return context;
};
