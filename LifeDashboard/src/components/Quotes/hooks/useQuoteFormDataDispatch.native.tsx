import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { setFormData, QuotesFormDataAction, QuoteFormData} from '../QuotesState.native';

export interface QuoteFormDataDispatch {
  setFormData: (formData: QuoteFormData) => void;
};

const useQuoteFormDataDispatch = (): QuoteFormDataDispatch => {
  const disaptch: Dispatch<QuotesFormDataAction> = useDispatch();

  return {
    setFormData(formData: QuoteFormData): void {
      disaptch(setFormData(formData));
    }
  };
}

export default useQuoteFormDataDispatch;