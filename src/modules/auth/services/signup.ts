import { AxiosResponse } from 'axios';
import { client } from '../../../common/services/client';
import { User } from '../../../core/user/types';
import { TextKeys } from '../../../core/localization';
import { mockDelay } from '../../../common/utils/mockServerWait';

const URL = 'users';

/**
 * Signs up.
 * Assumes the user is not already registered
 * @param params `User`
 * @returns the newly added User
 */
export const signup = async (params: Omit<User, 'id'>) => {
  let data: User | undefined;
  let error: TextKeys | undefined;

  const nickname = params.nickname.trim();
  const password = params.password.trim();
  const email = params.email.trim();
  const gender = params.gender;
  const birthdate = params.birthdate;

  try {
    const response: AxiosResponse<User> = await client.post(URL, {
      nickname,
      password,
      email,
      gender,
      birthdate,
    });
    data = response.data;
  } catch (err) {
    error = 'something-went-wrong';
  }

  await mockDelay();

  if (error) {
    throw error;
  }

  return data;
};
