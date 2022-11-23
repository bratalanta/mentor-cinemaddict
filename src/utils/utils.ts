import dayjs from 'dayjs';

const getRuntime = (runtime: number) => {
  const minutes = runtime % 60;
  const hours = (runtime - minutes) / 60;
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};

const getDate = (date: dayjs.Dayjs) => dayjs(date).format('D MMMM YYYY');

const getYear = (date: dayjs.Dayjs) => dayjs(date).format('YYYY');

const getActiveClass = (trigger: boolean, className: string) =>
  trigger ? className : '';

const getCommentDate = (date: string): string =>
  dayjs(date).format('YYYY/MM/DD HH:MM');

export { getRuntime, getDate, getYear, getActiveClass, getCommentDate };
