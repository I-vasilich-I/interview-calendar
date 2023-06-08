import { useContext } from "react";
import { styled } from "styled-components"
import { CurrentEventContext, EventsContext } from "../../context";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  z-index: -1;
`;

const Label = styled.label<{ $isActive: boolean }>`
  --bg-active: #6d6dff;
  --bg-checked: #e7e7ff;

  position: relative;
  display: block;
  height: 40px;

  div {
    width: 100%;
    height: 100%;
    background-color: ${({ $isActive }) => $isActive ? "var(--bg-active)" : "var(--bg-color)"};
  }
  
  /* :has() ain't working on firefox :( */
  
  /* &:has(:checked) {
    cursor: pointer;
    background-color: ${({ $isActive }) => $isActive ? "var(--bg-active)" : "var(--bg-checked)"};
  }

  &:has(:focus-visible) {
   outline: 1px solid var(--bg-active)
  }  */

  input:checked + div {
    background-color: ${({ $isActive }) => $isActive ? "var(--bg-active)" : "var(--bg-checked)"};
  }

  input:focus-visible + div {
    outline: 1px solid var(--bg-active)
  }
`

export const CalendarEvent = ({ eventTime }: { eventTime: string }) => {
  const { events } = useContext(EventsContext);
  const { currentEvent, setCurrentEvent } = useContext(CurrentEventContext)
  const event = events?.find((el) => el ===  eventTime) ?? null;
  const isActive = Boolean(currentEvent === event && event)

  const handleClick = () => {
    setCurrentEvent?.(event);
  }

  return (
   <Label htmlFor={eventTime} $isActive={isActive}>
      <Checkbox id={eventTime} checked={!!event} onChange={handleClick}/>
      <div></div>
   </Label>
  )
}