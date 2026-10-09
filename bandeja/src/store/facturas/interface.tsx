export interface StoreState {
  facturas: Factura[]
  estado: 'cargando' | 'listo' | 'error'
}

export type Factura = {
  id: number;
  cliente: string;
  total: number;
  fecha: string;
};



export type StoreAction =
  | { type: 'LOAD_FACTURAS'; payload: undefined }
  | { type: 'SET_FACTURAS'; payload: Factura[] }
  | { type: 'SET_FACTURA'; payload: Factura }
  | { type: 'UPDATE_FACTURA'; payload: Factura }
  | { type: 'DELETE_FACTURA'; payload: number }
  | { type: 'ADD_FACTURA'; payload: Factura };

