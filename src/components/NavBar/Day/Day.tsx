import dayjs from "dayjs";
import updateLocale from 'dayjs/plugin/updateLocale';
import { styled } from "styled-components"

dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"]
});

const StyledButton = styled.button<{ $day: dayjs.Dayjs, $isActive: boolean }>`
  --size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1.1rem;
  color: ${({ $isActive }) => $isActive ? "white" : "inherit"};
  height: var(--size);
  border: none;
  background-color: transparent;

  &::before {
    content: '${({ $day }) => $day.format('dd')}';
    display: block;
    position: absolute;
    font-size: 0.75rem;
    font-weight: 500;
    top: -20px;
    color: black;
  }

  &::after {
    display: ${({ $isActive }) => $isActive ? "block" : "none"};
    content: '';
    position: absolute;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background-color: var(--primary-color);
    z-index: -1;
  }
`

type Props = {
  day: dayjs.Dayjs;
  onClick?: () => void;
  isActive: boolean;
}

export const Day = ({ day, isActive, onClick }: Props) => {
  return (<StyledButton $day={day} $isActive={isActive} onClick={onClick}>{day.date()}</StyledButton>)
}