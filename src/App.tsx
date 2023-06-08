
import { styled } from 'styled-components';
import { CalendarGrid, Footer, Header } from './components';
import { useEffect, useState } from 'react';
import { Events } from './types';
import dayjs from 'dayjs';
import { CurrentDayContext, CurrentWeekContext, EventsContext } from './context';
import { CurrentEventContext } from './context/CurrentEventContext';

const Wrapper = styled.div`
  max-width: 740px;
  min-height: 450px;
  height: 100dvh;
  display: grid;
  grid-template-rows: 180px auto 70px;
  grid-template-columns: 1fr;
  align-items: center;
  margin: 0 auto;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const persistedEvents = localStorage.getItem('calendarEvents');
const todaysEvent = persistedEvents ? JSON.parse(persistedEvents) : [];

function App() {
  const [events, setEvents] = useState<Events>(todaysEvent);
  const [currentDay, setCurrentDay] = useState(dayjs());
  const [currentWeek, setCurrentWeek] = useState(dayjs());
  const [currentEvent, setCurrentEvent] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events])

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      <CurrentEventContext.Provider value={{ currentEvent, setCurrentEvent }}>
        <CurrentWeekContext.Provider value={{ currentWeek, setCurrentWeek }}>
          <CurrentDayContext.Provider value={{ currentDay, setCurrentDay }}>
            <Wrapper>
              <Header />
              <Main>
                <CalendarGrid />
              </Main>
              <Footer />
            </Wrapper>
          </CurrentDayContext.Provider>
        </CurrentWeekContext.Provider>
      </CurrentEventContext.Provider>
    </EventsContext.Provider>
  )
}

export default App;
