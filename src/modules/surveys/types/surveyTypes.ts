import { Question } from './questionTypes';

export type Survey = {
  id: number;
  title: string;
  questions: Question[];
};
