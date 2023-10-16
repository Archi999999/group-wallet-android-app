import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import type {RootState, AppDispatch} from "./store/store";

export const useAppDispatcn = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector