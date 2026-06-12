"use client";

import dynamic from 'next/dynamic';

import style_apuntamos from "@/styles/sections/apuntamos.module.scss";
import { MdHome, MdBusiness, MdSecurity, MdApartment, MdPersonSearch, MdLocationOn } from 'react-icons/md';

// Esto es lo que soluciona tu error:
const MapaZona = dynamic(() => import('@/components/sub_components/MapaZona'), {
    ssr: false, // <--- ESTO ES LO QUE ELIMINA EL ERROR
    loading: () => <p>Cargando mapa...</p> // Opcional: un estado de carga mientras carga el JS
});

export default function Apuntamos() {
    const targets = [
        { nombre: "Propietarios de viviendas", icono: <MdHome className={style_apuntamos.icono} /> },
        { nombre: "Empresas y oficinas", icono: <MdBusiness className={style_apuntamos.icono} /> },
        { nombre: "Barrios Privados", icono: <MdSecurity className={style_apuntamos.icono} /> },
        { nombre: "Condominios y complejos", icono: <MdApartment className={style_apuntamos.icono} /> },
        { nombre: "Gestores de propiedades", icono: <MdPersonSearch className={style_apuntamos.icono} /> },
        { nombre: "Empresas Inmobiliarias", icono: <MdBusiness className={style_apuntamos.icono} /> },
    ];

    return (
        <section className={style_apuntamos.apuntamos}>
            <div className={style_apuntamos.apuntamos_container}>
                <h2 className={style_apuntamos.apuntamos_titulo}>¿A quién apuntamos?</h2>
                <div className={style_apuntamos.apuntamos_layout}>
                    <div className={style_apuntamos.apuntamos_grid_targets}>
                        {targets.map((item, index) => (
                            <div key={index} className={style_apuntamos.apuntamos_target_item}>
                                <div className={style_apuntamos.apuntamos_icono}>{item.icono}</div>
                                <p>{item.nombre}</p>
                            </div>
                        ))}
                    </div>
                    <div className={style_apuntamos.apuntamos_divisor}></div>
                    <div className={style_apuntamos.apuntamos_zona_trabajo}>
                        <MdLocationOn className={style_apuntamos.apuntamos_zona_icono} />
                        <h3 className={style_apuntamos.apuntamos_zona_titulo} >ZONA DE TRABAJO</h3>
                        <h2 className={style_apuntamos.apuntamos_zona_subtitulo} >Buenos Aires</h2>
                        <p className={style_apuntamos.apuntamos_zona_parrafo} >Atención a hogares, empresas, condominios y barrios privados.</p>
                    </div>
                    <div className={style_apuntamos.mapa_wrapper}>
                        <div className={style_apuntamos.mapa_header}>
                            <h3 className={style_apuntamos.mapa_titulo}>Cobertura</h3>
                            <p className={style_apuntamos.mapa_parrafo}>Desplegamos equipos técnicos en toda la región para asegurar que tu urgencia sea nuestra prioridad. ¡Consultanos por tu ubicación!</p>
                        </div>
                        <MapaZona />
                    </div>
                </div>
            </div>
        </section>
    );
}