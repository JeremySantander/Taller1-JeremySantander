import React, { useContext } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import SanQuintaContext from '../providers/context';
        
function MedicionesView() {
    const {mediciones,eliminarMedicion, toast} = useContext(SanQuintaContext);

    const handleRemoveMedicion = (medicion) =>{
        eliminarMedicion(medicion);
        toast.current.show({severity:"success",summary:"Lectura Descartada"})
    }

    const accionesTemplate = (medicion) =>{
        return <Button severity='success' label='Descartar Lectura'
        rounded onClick={(e)=>handleRemoveMedicion(medicion)}></Button>
    }

    const valorTipo = (medicion) => {
        let tipomedida = '';
        if (medicion.tipo === 'Kilowatts') tipomedida = 'kW';
        else if (medicion.tipo === 'Watts') tipomedida = 'W';
        else if (medicion.tipo === 'Temperatura') tipomedida = 'C';
        return `${medicion.valor} ${tipomedida}`;
    }

    return (
        <DataTable value={mediciones} cellMemo={false} tableStyle={{ minWidth: '50rem' }}>
            <Column field="fecha" header="Fecha"></Column>
            <Column field="medidor" header="Medidor"></Column>
            <Column field="direccion" header="Direccion"></Column>
            <Column header="Valor" body={valorTipo}></Column>
            <Column header="Acciones" body={accionesTemplate}></Column>
        </DataTable>
    )
}

export default MedicionesView
