import { AxiosResponse } from 'axios';
import { client } from '../../../common/services/client';
import { User } from '../../../core/user/types';
import { TextKeys } from '../../../core/localization';
import { mockDelay } from '../../../common/utils/mockServerWait';

const buildUrl = (nickname: string, password: string) =>
  `users?nickname=${nickname}&password=${password}`;

export const signin = async (params: { nickname: string; password: string }) => {
  let data: User | undefined;
  let error: TextKeys | undefined;

  const nickname = params.nickname.trim();
  const password = params.password.trim();
  if (nickname.length === 0 || password.length === 0) {
    error = 'missing-input';
  } else {
    try {
      const response: AxiosResponse<User[]> = await client.get(
        buildUrl(params.nickname, params.password)
      );
      if (response.data.length === 0) {
        error = 'invalid-credentials';
      } else {
        data = response.data[0];
      }
    } catch (err) {
      error = 'something-went-wrong';
    }
  }

  await mockDelay();

  if (error) {
    throw error;
  }

  return data;
};
