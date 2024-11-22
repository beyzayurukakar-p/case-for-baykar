import { Question } from './questionTypes';

export type Survey = {
  id: number;
  title: string;
  questions: Question[];
};

export type OngoingQuestion = {
  id: number;
  index: number;
  duration: number;
};

export type GivenResponse = {
  response: any;
  duration: number;
};

export type OngoingSurvey = {
  id: number;
  ongoingQuestion?: OngoingQuestion;
  responses: {
    [questionId: number]: GivenResponse;
  };
  surveyDuration: number;
  lastUpdatedOn?: string;
};

export type CompletedSurvey = Survey &
  Omit<OngoingSurvey, 'lastUpdatedOn'> & {
    result: number;
    completedOn: string;
  };
