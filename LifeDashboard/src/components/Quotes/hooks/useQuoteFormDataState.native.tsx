import { useSelector } from 'react-redux';
import { QuoteFormDataState } from "../QuotesState.native";
import { StoreState } from '../../../utils/redux/interfaces.native';

const useQuoteFormDataState = (): QuoteFormDataState => {
  return useSelector((state: StoreState) => state.quoteFormData);
};

export default useQuoteFormDataState;