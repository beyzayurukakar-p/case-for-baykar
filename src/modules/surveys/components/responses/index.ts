import React from 'react';
import { QuestionType } from '../../types/questionTypes';
import SingleChoiceResponse from './SingleChoiceResponse';
import LikertResponse from './LikertResponse';
import MultipleChoiceResponse from './MultipleChoiceResponse';
import OpenEndedResponse from './OpenEndedResponse';
import RatingResponse from './RatingResponse';
import SliderResponse from './SliderResponse';
import YesNoResponse from './YesNoResponse';

export const responseComponentsByType: Record<QuestionType, React.ElementType> = {
  'likert': LikertResponse,
  'multiple-choice': MultipleChoiceResponse,
  'open-ended': OpenEndedResponse,
  'rating': RatingResponse,
  'single-choice': SingleChoiceResponse,
  'slider': SliderResponse,
  'yes-no': YesNoResponse,
};
