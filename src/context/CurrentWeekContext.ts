import dayjs from "dayjs";
import { createContext } from "react";

type CurrentWeekContextType = {
  currentWeek: dayjs.Dayjs;
  setCurrentWeek?: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

export const CurrentWeekContext = createContext<CurrentWeekContextType>({ currentWeek: dayjs() });