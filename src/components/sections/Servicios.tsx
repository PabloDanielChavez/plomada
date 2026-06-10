"use client";

import Image from "next/image";
import style_servicios from "@/styles/sections/servicios.module.scss";
import Link from "next/link";
import { GiPlantWatering, GiSpade, GiTripleCorn } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { MdBiotech } from "react-icons/md";
import { FaAward, FaSearchPlus, FaTools } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";

export default function Servicios() {

    return (
        <section className={style_servicios.servicios}>
            <div className={style_servicios.servicios_layout}>
                <div className={style_servicios.servicios_container_principal}>
                    <div className={style_servicios.servicios_item}>
                        <div className={style_servicios.servicios_icono_box}>
                            <FaSearchPlus className={style_servicios.servicios_icono} size={48}/>
                        </div>
                        <div className={style_servicios.servicios_contenido}>
                            <h2 className={style_servicios.servicios_heading}>Diagnóstico Preciso</h2>
                            <p className={style_servicios.servicios_texto}>Identificamos la raíz del problema mediante herramientas de última generación, evitando gastos innecesarios.</p>
                        </div>
                    </div>
                    <div className={style_servicios.servicios_item}>
                        <div className={style_servicios.servicios_icono_box}>
                            <FaTools className={style_servicios.servicios_icono} size={48}/>
                        </div>
                        <div className={style_servicios.servicios_contenido}>
                            <h2 className={style_servicios.servicios_heading}>Instalaciones Integrales</h2>
                            <p className={style_servicios.servicios_texto}>Desde grifería de alta gama hasta sistemas de distribución de agua completos, bajo normas de seguridad.</p>
                        </div>
                    </div>
                    <div className={style_servicios.servicios_item}>
                        <div className={style_servicios.servicios_icono_box}>
                            <FaAward className={style_servicios.servicios_icono} size={48}/>
                        </div>
                        <div className={style_servicios.servicios_contenido}>
                            <h2 className={style_servicios.servicios_heading}>Calidad Garantizada</h2>
                            <p className={style_servicios.servicios_texto}>Trabajamos con materiales certificados para asegurar durabilidad y eficiencia en cada reparación.</p>
                        </div>
                    </div>
                    <div className={style_servicios.servicios_item}>
                        <div className={style_servicios.servicios_icono_box}>
                            <FiAlertTriangle className={style_servicios.servicios_icono} size={48}/>
                        </div>
                        <div className={style_servicios.servicios_contenido}>
                            <h2 className={style_servicios.servicios_heading}>Atención de Emergencias</h2>
                            <p className={style_servicios.servicios_texto}>Respuesta rápida ante urgencias para minimizar daños y restaurar el confort en tu hogar.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}