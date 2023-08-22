import { useSelector } from 'react-redux';
import { RootState } from '../app/redux/store';
import type { TypedUseSelectorHook } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
