import { AxiosResponse } from 'axios';
import { client } from '../../../common/services/client';
import { TextKeys } from '../../../core/localization';
import { mockDelay } from '../../../common/utils/mockServerWait';
import { Survey } from '../types/surveyTypes';

const URL = 'surveys';

export const getSurveys = async () => {
  let data: Survey[] | undefined;
  let error: TextKeys | undefined;

  try {
    const response: AxiosResponse<Survey[]> = await client.get(URL);

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
