import React from 'react';
// Asegúrate de que tus iconos estén centralizados aquí. 
// Si te falta alguno, impórtalo desde '../screens/AppClientes/components/clientIcons' temporalmente.
import { UserIcon, ClientsIcon, TransportIcon, InventoryIcon, SupplyIcon, SalesIcon, LogoutIcon, SparklesIcon } from './icons/Icons';
import { Screen } from '../types';

interface SidebarProps {
    // Actualizamos esto para aceptar el Enum Screen y string por si acaso
    onNavigate?: (screen: Screen | string) => void;
    currentScreen?: Screen | string; // Agregado para saber cuál pintar de verde
}

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onClick }) => {
    const baseClasses = "flex items-center w-full p-3 my-1 rounded-lg text-white text-left text-sm";
    // Aquí unificamos el estilo de "Activo"
    const activeClasses = "bg-green-600 font-bold shadow-md border-l-4 border-green-300"; 
    const hoverClasses = "hover:bg-green-700 transition-colors duration-200 opacity-90 hover:opacity-100";

    return (
        <button className={`${baseClasses} ${active ? activeClasses : hoverClasses}`} onClick={onClick}>
            <div className="mr-3">{icon}</div>
            <span>{label}</span>
        </button>
    );
};

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, currentScreen }) => {
    return (
        <div className="w-64 bg-green-800 text-white flex flex-col p-4 shadow-lg h-screen sticky top-0">
            {/* Header de Usuario Unificado */}
            <div className="flex items-center mb-8 pb-4 border-b border-green-700">
                <div className="bg-green-600 rounded-full p-1 mr-3">
                    <UserIcon className="h-10 w-10 text-green-300" />
                </div>
                <div>
                    <p className="font-bold">Pablo, Torres</p>
                    <p className="text-xs text-green-200">Operador de CRM</p>
                </div>
            </div>

            {/* Navegación Principal */}
            <nav className="flex-1 overflow-y-auto">
                
                {/* --- MÓDULO CLIENTES (Integrado) --- */}
                <NavItem 
                    icon={<ClientsIcon />} 
                    label="Clientes" 
                    // Asume que en tu types.ts agregaste 'Clients' al enum Screen
                    active={currentScreen === 'clients' || currentScreen === Screen.Clients}
                    onClick={() => onNavigate && onNavigate('clients')} // O Screen.Clients
                />

                {/* --- MÓDULO ABASTECIMIENTO --- */}
                <NavItem 
                    icon={<SupplyIcon />} 
                    label="Abastecimiento" 
                    active={currentScreen === Screen.MainMenu} 
                    onClick={() => onNavigate && onNavigate(Screen.MainMenu)}
                />

                {/* --- MÓDULO INVENTARIO (Placeholder) --- */}
                <NavItem 
                    icon={<InventoryIcon />} 
                    label="Inventario" 
                    active={currentScreen === 'inventario'}
                    onClick={() => onNavigate && onNavigate('inventario')}
                />

                 {/* --- MÓDULO TRANSPORTE (Placeholder) --- */}
                 <NavItem 
                    icon={<TransportIcon />} 
                    label="Transporte" 
                    active={currentScreen === 'transporte'}
                    onClick={() => onNavigate && onNavigate('transporte')}
                />

                {/* --- MÓDULO VENTAS (Placeholder) --- */}
                <NavItem 
                    icon={<SalesIcon />} 
                    label="Ventas" 
                    active={currentScreen === 'ventas'}
                    onClick={() => onNavigate && onNavigate('ventas')}
                />

                {/* Sección Especial IA */}
                <div className="my-2 border-t border-green-700 pt-2 mt-4">
                    <p className="text-xs text-green-400 uppercase font-bold mb-2 px-2">Herramientas</p>
                    <NavItem 
                        icon={<SparklesIcon className="text-yellow-300"/>} 
                        label="Inteligencia Artificial" 
                        active={currentScreen === Screen.AIHub}
                        onClick={() => onNavigate && onNavigate(Screen.AIHub)}
                    />
                </div>
            </nav>

            {/* Footer / Cerrar Sesión */}
            <div className="mt-auto pt-4">
                <button className="flex items-center w-full p-3 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 shadow-sm">
                    <div className="mr-3"><LogoutIcon /></div>
                    <span>Cerrar Sesión</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;