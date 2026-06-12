"use client";

import Image from "next/image";
import style_sobre from "@/styles/sections/sobre.module.scss";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import { MdBuild, MdConstruction } from "react-icons/md";

export default function Sobre() {
    const numero = "5491164095914";
    const mensaje = encodeURIComponent(
        "*Contacto desde Plomada*\n\n" +
        "Hola Pablo, estuve viendo tu portafolio y me interesa conversar sobre el desarrollo de un sitio web para mi negocio."
    );
    
    return (
        <section className={style_sobre.sobre}>
            <div className={style_sobre.sobre_layout}>
                <div className={style_sobre.sobre_grid}>
                    <div className={style_sobre.sobre_contenido}>
                        <div className={style_sobre.logo_sin_fondo_box}>
                            <MdConstruction className={style_sobre.logo_sin_fondo_icono} />
                            <h1 className={style_sobre.logo_sin_fondo_h1}>
                                Plomada
                            </h1>
                        </div>
                        <p className={style_sobre.sobre_texto}>
                            Entendemos que la infraestructura de tu hogar es el corazón de tu bienestar. Nacimos con el compromiso de transformar un oficio tradicional en un servicio técnico de vanguardia, donde la transparencia, la limpieza y la puntualidad son nuestra prioridad.
                        </p>
                        <p className={style_sobre.sobre_texto}>
                            En cada proyecto, combinamos técnica hidráulica avanzada con una ejecución impecable, asegurando que cada conexión sea segura y eficiente.
                        </p>
                        <Link 
                            className={style_sobre.sobre_box_btn}
                            href={`https://wa.me/${numero}?text=${mensaje}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`SOLICITAR SERVICIO`}
                        >
                            <span className={style_sobre.sobre_btn}>
                                <MdBuild /> SOLICITAR SERVICIOS
                            </span>
                        </Link>
                    </div>
                    <div className={style_sobre.sobre_box_img}>
                        <div className={style_sobre.sobre_card_img}>
                            <div className={style_sobre.sobre_imagen_box}>
                                <Image 
                                    className={style_sobre.sobre_imagen}
                                    src={"/img/fondo/nosotros.jpg"}
                                    alt={"Nosotros"}
                                    width={256}
                                    height={454}
                                    sizes="200px"
                                />
                            </div>
                            <p className={style_sobre.sobre_parrafo_im}>Forjando confianza a través de la excelencia técnica.</p>
                        </div>
                    </div>

                </div>
            </div>  
            <div className={style_sobre.sobre_decoracion_fondo1}></div>
        </section>
    );
}