import { useAppSelector } from '../store';
import { selectUserExists } from './slice';

/** These two hooks created specifically for React Navigation's Auth flow */

export const useIsSignedIn = () => {
  const userExists = useAppSelector(selectUserExists);
  return userExists;
};

export const useIsSignedOut = () => {
  const userExists = useAppSelector(selectUserExists);
  return !userExists;
};
