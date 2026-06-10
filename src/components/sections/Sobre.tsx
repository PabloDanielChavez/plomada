"use client";

import Image from "next/image";
import style_sobre from "@/styles/sections/sobre.module.scss";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import { MdConstruction } from "react-icons/md";

export default function Sobre() {
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
                        
                        <div className={style_sobre.sobre_box_btn}>
                            <button className={style_sobre.sobre_btn}>Contactar</button>
                        </div>
                    </div>
                    <div className={style_sobre.sobre_box_img}>
                        <div className={style_sobre.sobre_card_img}>
                            <div className={style_sobre.sobre_titulo_img}>
                                <BsClockHistory />
                                <span>Nuestra Misión</span>
                            </div>
                            <div className={style_sobre.sobre_imagen_box}>
                                <Image 
                                    className={style_sobre.sobre_imagen}
                                    src={"/img/fondo/nosotros.jpg"}
                                    alt={"Nosotros"}
                                    width={200}
                                    height={200}
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