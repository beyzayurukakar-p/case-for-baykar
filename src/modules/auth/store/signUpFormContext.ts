import { createContext } from 'react';
import { User } from '../../../core/user/types';

export type SignUpFormData = Omit<User, 'id'> | null;

export const SignUpFormContext = createContext<
  | {
      value: Omit<User, 'id'> | null;
      setValue: (val: Omit<User, 'id'> | null) => void;
    }
  | undefined
>(undefined);
