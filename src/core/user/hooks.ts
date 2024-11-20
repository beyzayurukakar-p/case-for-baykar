import { useAppSelector } from '../store';
import { selectUserExists } from './slice';

export const useIsSignedIn = () => {
  const userExists = useAppSelector(selectUserExists);
  return userExists;
};

export const useIsSignedOut = () => {
  const userExists = useAppSelector(selectUserExists);
  return !userExists;
};
