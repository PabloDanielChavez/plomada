"use client";

import style_servicios from "@/styles/sections/servicios.module.scss";
import { MdWaterDrop, MdBuild, MdWaterDamage, MdLocalFireDepartment, MdPool, MdCleaningServices } from 'react-icons/md';

export default function Servicios() {

    const servicios = [
        { nombre: "Plomería", icono: <MdWaterDrop size={48} className={style_servicios.servicios_icono} /> },
        { nombre: "Reparaciones", icono: <MdBuild size={48} className={style_servicios.servicios_icono} /> },
        { nombre: "Impermeabilización", icono: <MdWaterDamage size={48} className={style_servicios.servicios_icono} /> },
        { nombre: "Calefacción", icono: <MdLocalFireDepartment size={48} className={style_servicios.servicios_icono} /> },
        { nombre: "Piscinas", icono: <MdPool size={48} className={style_servicios.servicios_icono} /> },
        { nombre: "Limpieza final", icono: <MdCleaningServices size={48} className={style_servicios.servicios_icono} /> },
    ];

    // Uso en el componente:
    return (
        <section className={style_servicios.servicios}>
            <div  className={style_servicios.servicios_presentacion}>
                <h2 className={style_servicios.servicios_titulo}>SERVICIOS</h2>
                <p className={style_servicios.servicios_subtitulo}>Gestión integral de mantenimiento</p>
            </div>
            <div className={style_servicios.servicios_layout}>
                <div className={style_servicios.servicios_container_principal}>
                    {servicios.map((item, index) => (
                        <div key={index} className={style_servicios.servicios_item}>
                            <div className={style_servicios.servicios_icono_box}>
                                {item.icono}
                            </div>
                            <div className={style_servicios.servicios_contenido}>
                                <h3 className={style_servicios.servicios_heading}>
                                    {item.nombre}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}