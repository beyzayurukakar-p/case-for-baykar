import { createContext } from 'react';
import { User } from '../../../core/user/types';

/*
Context to share sign-up form data between SignUpForm and SignUpAgreement components
*/

export type SignUpFormData = Omit<User, 'id'> | null;

export const SignUpFormContext = createContext<
  | {
      value: Omit<User, 'id'> | null;
      setValue: (val: Omit<User, 'id'> | null) => void;
    }
  | undefined
>(undefined);
