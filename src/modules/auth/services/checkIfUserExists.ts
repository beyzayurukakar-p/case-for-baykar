import { AxiosResponse } from 'axios';
import { client } from '../../../common/services/client';
import { User } from '../../../core/user/types';
import { TextKeys } from '../../../core/localization';
import { mockDelay } from '../../../common/utils/mockServerWait';

const buildUrl = (nickname: string) => `users?nickname=${nickname}`;

export const checkIfUserExists = async (params: { nickname: string }) => {
  let data: boolean | undefined;
  let error: TextKeys | undefined;

  const nickname = params.nickname.trim();

  try {
    const response: AxiosResponse<User[]> = await client.get(buildUrl(nickname));

    if (response.data.length > 0) {
      error = 'user-exists';
    } else {
      data = true;
    }
  } catch (err) {
    error = 'something-went-wrong';
  }

  await mockDelay();

  if (error) {
    throw error;
  }

  return data;
};
