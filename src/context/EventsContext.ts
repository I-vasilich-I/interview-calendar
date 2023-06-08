import { createContext } from "react";
import { Events } from "../types";

type CalendarEventsContext = {
  events: Events,
  setEvents?: React.Dispatch<React.SetStateAction<Events>>
}

export const EventsContext = createContext<CalendarEventsContext>({ events: [] });