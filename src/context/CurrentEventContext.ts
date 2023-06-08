import { createContext } from "react";

type CurrentEventContextType = {
  currentEvent: string | null;
  setCurrentEvent?: React.Dispatch<React.SetStateAction<string | null>>;
}

export const CurrentEventContext = createContext<CurrentEventContextType>({ currentEvent: null });