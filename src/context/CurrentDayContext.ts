import dayjs from "dayjs";
import { createContext } from "react";

type CurrentDayContextType = {
  currentDay: dayjs.Dayjs;
  setCurrentDay?: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

export const CurrentDayContext = createContext<CurrentDayContextType>({ currentDay: dayjs() });