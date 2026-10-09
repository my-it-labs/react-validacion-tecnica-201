import  { StoreAction, StoreState } from "./interface";


export const initialState: StoreState = {
    facturas: [],  
};

export const storeReducer = (state: StoreState, action: StoreAction): StoreState => {       
    switch (action.type) {
        case 'LOAD_FACTURAS':
            return { ...state, facturas: [] }; // Aquí podrías cargar las facturas desde una fuente externa si es necesario   

        case 'SET_FACTURAS':
            return { ...state, facturas: action.payload };
        case 'SET_FACTURA':
            return { ...state, facturas: [...state.facturas.filter(f => f.id !== action.payload.id), action.payload] };
        case 'UPDATE_FACTURA':
            return { ...state, facturas: state.facturas.map(f => f.id === action.payload.id ? action.payload : f) };
        case 'DELETE_FACTURA':
            return { ...state, facturas: state.facturas.filter(f => f.id !== action.payload) };
        case 'ADD_FACTURA':
            return { ...state, facturas: [...state.facturas, action.payload] };
        default:
            return state;
    }   
};