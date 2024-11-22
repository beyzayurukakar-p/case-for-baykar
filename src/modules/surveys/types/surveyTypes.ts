import { Question } from './questionTypes';

export type Survey = {
  id: number;
  title: string;
  questions: Question[];
};

export type OngoingQuestion = {
  id: number;
  duration: number;
};

export type OngoingSurvey = {
  id: number;
  ongoingQuestion?: OngoingQuestion;
  responses: {
    [questionId: number]: {
      response: any;
      duration: number;
    };
  };
  surveyDuration: number;
  lastUpdatedOn?: string;
};

export type CompletedSurvey = Omit<OngoingSurvey, 'lastUpdatedOn'> & {
  result: number;
  completedOn: string;
};
