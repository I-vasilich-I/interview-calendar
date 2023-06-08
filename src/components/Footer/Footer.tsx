import { styled } from "styled-components"
import { Button } from "../../elements"
import { useContext } from "react"
import { EventsContext, CurrentEventContext, CurrentWeekContext, CurrentDayContext } from "../../context"
import dayjs from "dayjs"

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 calc(20px - 0.5rem);
  background-color: var(--bg-color);
`

export const Footer = () => {
  const { currentEvent, setCurrentEvent } = useContext(CurrentEventContext);
  const { setCurrentWeek } = useContext(CurrentWeekContext);
  const { setCurrentDay } = useContext(CurrentDayContext);
  const { setEvents } = useContext(EventsContext);

  const handleDelete = () => {
    setEvents?.((prev) => prev?.filter(el => el !== currentEvent) ?? null)
    setCurrentEvent?.(null);
  }

  const handleTodayClick = () => {
    setCurrentWeek?.(dayjs())
    setCurrentDay?.(dayjs());
  }

  return (
    <StyledFooter>
      <Button title="Today"  onClick={handleTodayClick} />
      {currentEvent && <Button title="Delete" onClick={handleDelete} />}
    </StyledFooter>
  )
}