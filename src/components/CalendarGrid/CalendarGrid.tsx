import { styled } from "styled-components"
import { CalendarEvent } from "../../elements"
import { useContext, useMemo } from "react"
import { CurrentWeekContext } from "../../context"
import dayjs from "dayjs";

const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;

const GridWrapper = styled.div`
  height: max(99%, 400px);
  overflow-y: scroll;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 50px 1fr;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${DAYS_PER_WEEK}, 1fr);
  grid-template-rows: repeat(${HOURS_PER_DAY}, 1fr);
  gap: 2px;
`;

const Labels = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${HOURS_PER_DAY}, 1fr);
  background-color: white;
  gap: 2px;
`;

const Label = styled.span<{ $i: number }>`
  font-size: 0.8rem;
  position: absolute;
  margin: 0;
  padding-right: 0.5rem;
  z-index: 15;
  top: calc(-50% + 0.6rem - 1px);
  right: 0;
  grid-column: 1 / 1;
  grid-row: ${({ $i  }) => $i +1 } / ${({ $i  }) => $i + 1 };
  color: rgba(115, 114, 181, 0.4);
`;

export const CalendarGrid = () => {
  const { currentWeek } = useContext(CurrentWeekContext);
  const weekEvents = useMemo(() => getWeekEvents(currentWeek), [currentWeek]);

  return (
    <GridWrapper>
      <Labels>
        {[...Array(HOURS_PER_DAY).keys()].map((_, i) => <Label key={i} $i={i}>{getLabelText(i)}</Label> )}
      </Labels>
      <Grid>
        {weekEvents.map((eventTime) => (<CalendarEvent key={eventTime} eventTime={eventTime} />))}
      </Grid>
    </GridWrapper>
  );
}

function getLabelText(hour: number) {
  const str = `${hour}:00`;
  return hour === 0 ? '' : str.padStart(5, '0');
}

function getWeekEvents(week: dayjs.Dayjs) {
  let hour = 0;
  let day = 1;
  
  return [...Array(HOURS_PER_DAY * DAYS_PER_WEEK).keys()].map(() => {
    const elem = `${week.day(day).format('YYYY-MM-DD')}:${hour}`;

    if (day === DAYS_PER_WEEK) {
      day = 1;
      hour++;
    } else {
      day++
    }

    return elem;
  });
}