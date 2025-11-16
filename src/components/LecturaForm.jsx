import React, {useContext, useState} from 'react'
import { Fieldset } from 'primereact/fieldset';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Editor } from 'primereact/editor';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from "primereact/radiobutton";
import { Button } from 'primereact/button';
import SanQuintaContext from '../providers/context';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';


function LecturaForm() {
    const router = useNavigate();
    const { registerMedicion, toast } = useContext(SanQuintaContext);
    const [fecha, setFecha] = useState(null);
    const valorMedidor = [
        {name: '01', text: '01'},
        {name: '02', text: '02'},
        {name: '03', text: '03'},
        {name: '04', text: '04'},
        {name: '05', text: '05'},
        {name: '06', text: '06'},
        {name: '07', text: '07'},
        {name: '08', text: '08'},
        {name: '09', text: '09'},
        {name: '10', text: '10'},
    ];
    const [medidor, setMedidor] = useState(valorMedidor[0]);
    const [direccion, setDireccion] = useState('');
    const [valor, setValor] = useState(1);
    const [tipo, setTipo] = useState('');


    const handleSubir = () => {
        const newMedicion = {
            id: uuidv4(),
            fecha: fecha.toLocaleString(),
            medidor: medidor.text,
            direccion: direccion,
            valor: valor,
            tipo: tipo
        };
        if (!fecha || !medidor || !direccion || !valor || !tipo) {
            toast.current.show({severity:"warn", 
                summary:"Los datos no son validos. Porfavor complete todos los campos"});
            return;
        }
        registerMedicion(newMedicion);
        toast.current.show({severity:"info", summary:"Medicion Registrada"})
        router("/mediciones-view");
    }
  return (
    <Fieldset legend="Registrar Lectura">
            <div className="mb-3">
                <label htmlFor="">Fecha y Hora</label>
                <Calendar className='w-100 mt-3' value={fecha} 
                onChange={(e) => setFecha(e.value)} dateFormat="dd-MM-yyyy"
                hourFormat='24' showTime />
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="">Medidor</label>
                <Dropdown className='mt-3' options={valorMedidor} optionLabel='text'
                value={medidor} onChange={e=>setMedidor(e.value)}></Dropdown>
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="tipo select">Direccion</label>
                <Editor className='mt-3' value={direccion} onTextChange={(e) => setDireccion(e.textValue)} style={{ height: '320px' }} />
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="">Valor</label>
                <InputNumber className='mt-3' showButtons min={1} max={500}
                value={valor} onChange={e=>setValor(e.value)}></InputNumber>
            </div>
            <div className="mb-3 d-flex flex-row gap-3">
                <label htmlFor="">Tipo de Medida</label>
                    <div className="align-items-center">
                        <RadioButton inputId="tipo-medida-1" name="tipomedida" value="Kilowatts" onChange={(e) => setTipo(e.value)} checked={tipo === 'Kilowatts'} />
                        <label htmlFor="tipo-medida-1" className="ml-2">Kilowatts</label>
                    </div>
                    <div className="align-items-center">
                        <RadioButton inputId="tipo-medida-2" name="tipomedida" value="Watts" onChange={(e) => setTipo(e.value)} checked={tipo === 'Watts'} />
                        <label htmlFor="tipo-medida-2" className="ml-2">Watts</label>
                    </div>
                    <div className="align-items-center">
                        <RadioButton inputId="tipo-medida-3" name="tipomedida" value="Temperatura" onChange={(e) => setTipo(e.value)} checked={tipo === 'Temperatura'} />
                        <label htmlFor="tipo-medida-3" className="ml-2">Temperatura</label>
                    </div>
            </div>
            <div className="mt-3">
                <Button severity='info' label='Registrar'
                onClick={handleSubir}></Button>
            </div>
        </Fieldset>
  )
}

export default LecturaForm
