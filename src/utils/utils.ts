import dayjs from 'dayjs';

const getRuntime = (runtime: number) => {
  const minutes = runtime % 60;
  const hours = (runtime - minutes) / 60;
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};

const getDate = (date: string, format: string) => dayjs(date).format(format);

const getActiveClass = (trigger: boolean, className: string) =>
  trigger ? className : '';

export { getRuntime, getDate, getActiveClass };
