import { ResponseData } from './responseTypes';

export type QuestionType =
  | 'single-choice'
  | 'multiple-choice'
  | 'rating'
  | 'slider'
  | 'yes-no'
  | 'likert'
  | 'open-ended';

export type Question = {
  id: number;
  order: number;
  type: QuestionType;
  image?: string;
  text: string;
  responseData: ResponseData;
};
