import { Duration } from 'date-fns';

const zeroPad = (num: number) => String(num).padStart(2, '0');

export const formatDuration = (duration: Duration) => {
  let formatted: string = '';
  formatted += duration.hours ? `${zeroPad(duration.hours)}:` : '00:';
  formatted += duration.minutes ? `${zeroPad(duration.minutes)}:` : '00:';
  formatted += duration.seconds ? `${zeroPad(duration.seconds)}` : '00';

  return formatted;
};
