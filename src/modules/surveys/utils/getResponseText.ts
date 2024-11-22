import { TextKeys } from '../../../core/localization';
import { Question } from '../types/questionTypes';
import { MultipleChoiceResponseData, SliderResponseData } from '../types/responseTypes';

export const getResponseText = (
  responseValue: any,
  question: Question,
  localize: (text: TextKeys) => void
) => {
  if (
    question.type === 'multiple-choice' ||
    question.type === 'single-choice' ||
    question.type === 'rating'
  ) {
    const response = (question.responseData as MultipleChoiceResponseData).options.find(
      (choice) => {
        return choice.value === responseValue;
      }
    );
    return localize((response?.label || '-') as TextKeys);
  }
  if (question.type === 'open-ended') {
    return responseValue;
  }
  if (question.type === 'slider') {
    const response = question.responseData as SliderResponseData;
    return `${responseValue} / ${response.max}`;
  }
  return '-';
};
