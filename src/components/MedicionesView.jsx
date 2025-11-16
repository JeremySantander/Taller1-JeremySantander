import React, { useContext, useEffect,useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import SanQuintaContext from '../providers/context';
        
function MedicionesView() {
    const [tipo, setTipo] = useState("---");
    const {mediciones,eliminarMedicion, toast} = useContext(SanQuintaContext);
    const tiposdemedida = ["---","Kilowatts", "Watts", "Temperatura"];

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
        if (medicion.tipo === tiposdemedida[1]) tipomedida = 'kW';
        else if (medicion.tipo === tiposdemedida[2]) tipomedida = 'W';
        else if (medicion.tipo === tiposdemedida[3]) tipomedida = 'C';
        return `${medicion.valor} ${tipomedida}`;
    }

    const medicionesMostradas = tipo !== "---" 
        ? mediciones.filter(m => m.tipo === tipo)
        : mediciones;

    const header = (
        <div className="mb-3 d-flex flex-row gap-3 align-items-center">
            <span className="text-xl text-900 font-bold">Filtrar</span>
            <Dropdown options={tiposdemedida} value={tipo} placeholder="---" onChange={(e) => setTipo(e.value)}/>
        </div>
    );



    return (
        <DataTable value={medicionesMostradas} header={header} cellMemo={false} tableStyle={{ minWidth: '50rem' }}>
            <Column field="fecha" sortable header="Fecha"></Column>
            <Column field="medidor" header="Medidor"></Column>
            <Column field="direccion" header="Direccion"></Column>
            <Column header="Valor" body={valorTipo}></Column>
            <Column header="Acciones" body={accionesTemplate}></Column>
        </DataTable>
    )
}

export default MedicionesView
