import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import QuoteFormDataStateReducer from '../../components/Quotes/QuotesState.native';
import rootReducer from './reducer';

// TODO: Convert to configureStore with redux toolkit?
const configureStore = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default configureStore;