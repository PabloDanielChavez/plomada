"use client";

import Image from "next/image";
import style_bienvenida from "@/styles/sections/bienvenida.module.scss";
import Link from "next/link";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdBuild, MdConstruction } from "react-icons/md";

export default function Bienvenida() {

    return (
        <section className={style_bienvenida.bienvenida}>
            <div className={style_bienvenida.bienvenida_layout}>
                <div className={style_bienvenida.bienvenida_header_box_informacion}>
                    <div className={style_bienvenida.logo_sin_fondo_box}>
                        <MdConstruction className={style_bienvenida.logo_sin_fondo_icono} />
                        <h1 className={style_bienvenida.logo_sin_fondo_h1}>
                            Plomada 
                        </h1>
                    </div>
                    <span className={style_bienvenida.bienvenida_header_span_tag} >
                        Soluciones hidráulicas de alta precisión.
                    </span>
                    <p className={style_bienvenida.bienvenida_header_p_descripcion} >
                        Expertos en instalaciones, reparaciones y mantenimiento preventivo. Garantizamos el funcionamiento óptimo de tu hogar o industria con rapidez y profesionalismo.
                    </p>
                    <div className={style_bienvenida.bienvenida_header_box_btn}>
                        <Link className={style_bienvenida.bienvenida_header_btn} href="/productos/floraafod">
                            <span className={style_bienvenida.bienvenida_header_btn_span}>
                                <MdBuild className={style_bienvenida.icono_clase} /> SERVICIOS
                            </span>
                        </Link>
                        <Link className={style_bienvenida.bienvenida_header_btn} href="https://wa.me/tu_numero">
                            <span className={style_bienvenida.bienvenida_header_btn_span}>
                                <BsGraphUpArrow  className={style_bienvenida.icono_clase} /> PRESUPUESTO    
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}