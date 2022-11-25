import dayjs from 'dayjs';

const getRuntime = (runtime: number) => {
  const minutes = runtime % 60;
  const hours = (runtime - minutes) / 60;
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};

const getDate = (date: string, format: string) => dayjs(date).format(format);

const getRandomString = (length: number): string => {
  const chars = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ';
  let str = '';
  for (let i = 0; i < length; i++) {
    var pos = Math.floor(Math.random() * chars.length);
    str += chars.substring(pos, pos + 1);
  }
  return str;
};

export { getRuntime, getDate, getRandomString };
