"use client";

import Image from "next/image";
import style_footer from "@/styles/sections/footer.module.scss";
import Link from "next/link";
import { BsLeaf } from "react-icons/bs";
import { BiBriefcase, BiCog, BiEnvelope, BiHomeAlt2, BiMenu } from 'react-icons/bi';
import { MdConstruction, MdInfoOutline, MdLocationOn, MdTimeline } from 'react-icons/md';

export default function Footer() {
    const foo = [
        { id: 1, titulo: "Inicio", icono: <BiHomeAlt2 size={22} />},
        { id: 2, titulo: "Servicio", icono: <BiBriefcase     size={22} />},
        { id: 3, titulo: "Proceso", icono: <BiCog size={22} />},
        { id: 4, titulo: "Sobre", icono: <MdInfoOutline size={22} />},
        { id: 5, titulo: "Apuntamos", icono: <MdLocationOn size={22} />},
    ];
    return (
        <footer className={style_footer.footer}>
            <div className={style_footer.footer_decoracion}></div>

            <div className={style_footer.footer_layout}>
                <div className={style_footer.footer_grid}>
                    <div className={style_footer.logo_sin_fondo_box}>
                        <MdConstruction className={style_footer.logo_sin_fondo_icono} />
                        <h4 className={style_footer.logo_sin_fondo_h4}>
                            Plomada
                        </h4>
                    </div>
                    {/* <div className={`${style_footer.footer_nav}`} aria-label="Navegación principal">
                        <ul className={`${style_footer.footer_ul}`}>
                            {foo.map((f) => (
                            <li key={f.id} className={style_footer.footer_li} aria-label={`Navegacion ${f.titulo}`}>
                                {f.icono}
                                <span className={style_footer.footer_spanNav}>{f.titulo}</span>
                            </li>
                            ))}
                        </ul>
                    </div> */}
                    <div className={style_footer.footer_links}>
                        <p className={style_footer.footer_copyright}>
                            Copyright © 2026 Pablo Daniel Chavez
                            <span className={style_footer.footer_divider}> | </span>
                            <Link 
                                href="https://portafolio-pc.netlify.app" 
                                target="_blank"
                                className={style_footer.footer_link_portafolio}
                            >
                                Ver Portafolio
                            </Link>
                            <span className={style_footer.footer_divider}> | </span>
                            Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}