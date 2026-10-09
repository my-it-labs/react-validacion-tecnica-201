import { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { initialState, storeReducer } from "./reducer";
import { StoreAction, StoreState } from "./interface";


const StateContext = createContext<StoreState | undefined>(undefined);
const DispatchContext = createContext<Dispatch<StoreAction> | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(() => {
      LineasApi.getLineas().then((lineas) => { dispatch({ type: 'SET_FACTURAS', payload: lineas }) })
    // Aquí podrías cargar las facturas desde una fuente externa si es necesario
    // Por ejemplo, podrías hacer una llamada a una API y luego despachar la acción SET_FACTURAS con los datos obtenidos.
  }, [state,estado]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}


export const useStoreState = (): StoreState => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStoreState debe ser usado dentro de un StoreProvider');
  }
  return context;
};

export const useStoreDispatch = (): Dispatch<StoreAction> => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useStoreDispatch debe ser usado dentro de un StoreProvider');
  }
  return context;
};

export const useFacturas: () => [StoreState, Dispatch<StoreAction>] = () => [useStoreState(), useStoreDispatch()]