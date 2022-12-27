import { combineReducers } from 'redux';
import QuoteFormDataStateReducer from '../../components/Quotes/QuotesState.native';

export const reducers = {
  quoteFormData: QuoteFormDataStateReducer
};

const rootReducer = combineReducers({ ...reducers });

export default rootReducer;
