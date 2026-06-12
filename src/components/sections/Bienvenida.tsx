"use client";

import Image from "next/image";
import style_bienvenida from "@/styles/sections/bienvenida.module.scss";
import Link from "next/link";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdBuild, MdConstruction } from "react-icons/md";

export default function Bienvenida() {
    const numero = "5491164095914";
    const mensaje = encodeURIComponent(
        "*Contacto desde Plomada*\n\n" +
        "Hola Pablo, estuve viendo tu portafolio y me interesa conversar sobre el desarrollo de un sitio web para mi negocio."
    );

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
                        Soluciones profesionales.
                    </span>
                    <p className={style_bienvenida.bienvenida_header_p_descripcion} >
                        Expertos en instalaciones, reparaciones y mantenimiento preventivo. Garantizamos el funcionamiento óptimo de tu hogar o industria con rapidez y profesionalismo.
                    </p>
                    <div className={style_bienvenida.bienvenida_header_box_btn}>
                        <Link 
                            className={style_bienvenida.bienvenida_header_btn}
                            href={`https://wa.me/${numero}?text=${mensaje}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`SOLICITAR SERVICIO`}
                        >
                            <span className={style_bienvenida.bienvenida_header_btn_span}>
                                <MdBuild className={style_bienvenida.icono_clase} />SOLICITAR SERVICIOS
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}