import dayjs from "dayjs";

function getEventTime(date: dayjs.Dayjs) {
  return `${date.format('YYYY-MM-DD:H')}`;
}

function isSameDay (day1: dayjs.Dayjs, day2: dayjs.Dayjs) {
  return day1.isSame(day2, 'day');
} 

export {
  getEventTime,
  isSameDay,
}