import React, { use, useEffect, useRef, useState } from 'react'
import SanQuintaContext from './context'

function SanQuintaProvider({ children }) {
    const toast = useRef(null);
    const localKey = "mediciones_list_data";
    const [mediciones, setMediciones] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem(localKey);
        if (data !== null) {
            setMediciones(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(mediciones));
    }, [mediciones]);

    const registerMedicion = (medicion) => {
        setMediciones([...mediciones, medicion]);
    }
    const eliminarMedicion = (medicion) => {
        setMediciones(mediciones.filter(m=>m.id !== medicion.id))
    }

    const globalState = {mediciones,registerMedicion, eliminarMedicion, toast};
    return (
        <SanQuintaContext.Provider value={globalState}>{children}</SanQuintaContext.Provider>
    )
}

export default SanQuintaProvider;
