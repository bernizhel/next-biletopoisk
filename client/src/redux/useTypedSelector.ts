import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "@/redux/store";

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
