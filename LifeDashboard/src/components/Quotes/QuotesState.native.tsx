import { TagData } from "../../data/mockData.native";

export interface QuoteFormData {
  quote?: string;
  author?: string;
  tags: TagData[];
};

export const initialQuoteDataState = {
  formData: {
    quote: '',
    author: '',
    tags: []
  }
};

export interface QuoteFormDataState {
  formData: QuoteFormData;
}

const SET_FORM_DATA = 'QuoteFormDataState/SET_FORM_DATA';

interface SetFormDataAction {
  type: typeof SET_FORM_DATA;
  payload: QuoteFormData;
}

export function setFormData(formData: QuoteFormData): SetFormDataAction {
  return { type: SET_FORM_DATA, payload: formData };
}

export type QuotesFormDataAction = SetFormDataAction;

export default function QuoteFormDataStateReducer(
  state = initialQuoteDataState,
  action: QuotesFormDataAction
): QuoteFormDataState {
  switch (action.type) {
    case SET_FORM_DATA:
      return { ...state, formData: action.payload }

    default:
      return state;
  };
}