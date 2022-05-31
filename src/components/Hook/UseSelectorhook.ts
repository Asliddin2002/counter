import { useSelector, TypedUseSelectorHook  } from "react-redux";
import { rootState } from "../Redux/CombineActions";


export const useTypeSelectorHook: TypedUseSelectorHook<rootState> = useSelector