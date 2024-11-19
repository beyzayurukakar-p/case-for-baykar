import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './configuration';
import { RootState } from './reducers';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
