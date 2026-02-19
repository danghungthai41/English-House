import { useContext } from "react";
import Context from "./Context";

const useProvider = <T extends any = any>(selector?: (store: any) => T): T => {
  const value = useContext(Context);
  if (selector) {
    return selector(value);
  }
  return value as T;
};

const useStore = (): any => {
  const [state, dispatch] = useContext<any>(Context);
  return [state, dispatch];
};

export { useProvider, useStore };
