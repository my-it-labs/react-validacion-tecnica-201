import { useFacturas } from "../store/facturas"
import { Factura } from "../store/facturas/interface"

const Facturas = () => {
    const[{facturas}, facturasDispatch] = useFacturas()

    const agregarFactura  = (factura: Factura) => {
        facturasDispatch({ type: 'ADD_FACTURA', payload: factura })
    }   

    const eliminarFactura = (id: number) => {
        facturasDispatch({ type: 'DELETE_FACTURA', payload: id })
    }   

    return <>
    <FacturasList facturas={facturas} onFacturaDeleted={eliminarFactura} />
    <AgregarFactura onFacturaAdded={agregarFactura} />  
    </>

}



const FacturasList = ({facturas, onFacturaDeleted}: {facturas: Factura[], onFacturaDeleted: (id: number) => void}) => facturas.map((factura: Factura) => (  
        <div key={factura.id}>
            <p>Factura ID: {factura.id}</p>
            <p>Total: {factura.total}</p>   
            <p>Fecha: {factura.fecha}</p>
            <EliminarFactura id={factura.id} onFacturaDeleted={onFacturaDeleted} />
        </div>
    ))


const AgregarFactura = ({onFacturaAdded}: {onFacturaAdded: (factura: Factura) => void}) => {
    const nuevaFactura: Factura = {
        id: Math.floor(Math.random() * 1000),
        cliente: "Cliente de prueba",
        total: Math.floor(Math.random() * 1000),
        fecha: new Date().toISOString(),
    };
    return <button onClick={() => onFacturaAdded(nuevaFactura)}>Agregar Factura</button>
}



const EliminarFactura = ({id, onFacturaDeleted}: {id: number, onFacturaDeleted: (id: number) => void}) => {
    return <button onClick={() => onFacturaDeleted(id)}>Eliminar Factura</button>
}


export default Facturas