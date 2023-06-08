import { styled } from "styled-components"
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { useContext } from "react";
import { Day } from "./Day/Day";
import { Button } from "../../elements";
import leftArrowSVG from '../../assets/left-arrow.svg';
import rightArrowSVG from '../../assets/right-arrow.svg';
import { CurrentDayContext, CurrentWeekContext } from "../../context";
import { isSameDay } from "../../helpers";

dayjs.extend(weekday)
dayjs.extend(weekOfYear)

const Wrapper = styled.nav`
  padding: 0.5rem 0 0.5rem 50px;
`

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-top: 20px;
  gap: 2px;
  padding-bottom: 0.5rem;
`

const Control = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: center;
  align-items: center;
`

export const NavBar = () => {
  const DAYS_PER_WEEK = 7;
  const { currentWeek, setCurrentWeek } = useContext(CurrentWeekContext);
  const { currentDay, setCurrentDay } = useContext(CurrentDayContext);

  const setWeek = (thisWeek: dayjs.Dayjs, next = 1) => dayjs().week(thisWeek.week() + next)

  //  used el + 1 so the first day of the would be Monday
  return (
    <Wrapper>
      <WeekDays>
        {[...Array(DAYS_PER_WEEK).keys()]
          .map((el) => 
            <Day 
              key={el} 
              day={currentWeek.day(el+1)} 
              onClick={() => setCurrentDay?.(currentWeek.day(el + 1))} 
              isActive={isSameDay(currentDay, currentWeek.day(el + 1))}
            />
          )
        }
      </WeekDays>
      <Control>
        <Button 
          title={<img src={leftArrowSVG} width={15} height={15} />} 
          onClick={() => setCurrentWeek?.((prev) => setWeek(prev, -1))} 
        />
        {currentWeek.format('MMMM YYYY')}
        <Button 
          title={<img src={rightArrowSVG} width={15} height={15} />} 
          onClick={() => setCurrentWeek?.((prev) => setWeek(prev))} 
        />
      </Control>
    </Wrapper>
  )
}
