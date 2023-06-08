import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { styled } from "styled-components";
import { Button } from "../../elements";
import plusSVG from '../../assets/plus.svg';
import { useContext } from "react";
import { EventsContext } from "../../context";
import { getEventTime } from "../../helpers";
import { NavBar } from "..";

dayjs.extend(customParseFormat);

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  `

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
  background-color: var(--bg-color);
  
`

const StyledHeading = styled.h1`
  font-size: 1.6rem;
  font-weight: normal;
`

export const Header = () => {
  const { events, setEvents } = useContext(EventsContext);

  const handleClick = () => {
    const result = prompt('Enter event time: YYYY-MM-DD HH');

    if(!result) {
      return;
    }

    const date = dayjs(result, 'YYYY-MM-DD HH', true);

    if (!date.isValid()) {
      alert('Invalid date');
      return;
    }
    
    const eventTime = getEventTime(date);
    const isEmptySpot = !events.includes(eventTime);
    
    if (!isEmptySpot) {
      alert('Already have event on that date');
      return;
    }

    setEvents?.((prev) => [...prev, eventTime])
  }

  return (
    <>
      <StyledHeader>
        <StyledDiv>
          <StyledHeading>Interview Calendar</StyledHeading>
          <Button title={<img src={plusSVG} width={20} height={20} />} onClick={handleClick} />
        </StyledDiv>
        <NavBar />
      </StyledHeader>
    </>
  )
}