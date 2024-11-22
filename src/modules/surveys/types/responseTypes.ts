export type SingleMultiOption = {
  order: number;
  label: string;
  value: string;
  image?: string;
};

export type LikertOption = {
  order: number;
  label: string;
  value: string;
};

export type RatingOption = {
  order: number;
  label: string;
  value: string;
  color?: string;
};

export type SingleChoiceResponseData = {
  options: SingleMultiOption[];
};

export type MultipleChoiceResponseData = {
  options: SingleMultiOption[];
};

export type RatingResponseData = {
  options: RatingOption[];
};

export type SliderResponseData = {
  min: number;
  max: number;
  step: number;
};

export type YesNoResponseData = {
  yesLabel: string;
  yesValue: number;
  noLabel: string;
  noValue: number;
};

export type LikertResponseData = {
  options: LikertOption[];
};

export type OpenEndedResponseData = {
  required: boolean;
};

export type ResponseData =
  | SingleChoiceResponseData
  | MultipleChoiceResponseData
  | RatingResponseData
  | SliderResponseData
  | YesNoResponseData
  | LikertResponseData
  | OpenEndedResponseData;
