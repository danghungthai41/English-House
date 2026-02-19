import { useMemo } from "react";
import { useReducer, Reducer } from "react";
import Context from "./Context";
import { useProvider } from "./hooks";
import reducer, { initialState } from "./reducer";

// const Provider = ({ children, ...props }) => {
//   // const [state, dispatch] = useReducer(reducer, initialState);
//   const context = useProvider();

//   const _value = useMemo(() => {
//     const res = {
//       ...context,
//       ...props,
//       action: {},
//     };
//     if (context && context.action) {
//       res.action = context.action;
//     }
//     if (props && props.action) {
//       res.action = {
//         ...res.action,
//         ...props.action,
//       };
//     }
//     return res;
//   }, []);

//   return <Context.Provider value={_value}>{children}</Context.Provider>;
// };

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
export default Provider;
