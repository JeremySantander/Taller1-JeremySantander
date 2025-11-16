import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router";
        
function MedicionNavbar() {
    const router = useNavigate();
    const navbar = [
        {
            label: 'Home', icon: 'pi pi-home',
            command: () => {router('/');}
        },
        {
            label: 'Registrar Lectura', icon: 'pi pi-bolt',
            command: () => {router('/lectura-form');}
        },
        {
            label: 'Mediciones Existentes', icon: 'pi pi-server',
            command: () => {router('/mediciones-view');}
        }
    ];

    return (
        <div className="row">
            <Menubar model={navbar} />
        </div>
    )
}

export default MedicionNavbar
