"use client";

import Image from "next/image";
import style_footer from "@/styles/sections/footer.module.scss";
import Link from "next/link";
import { BsLeaf } from "react-icons/bs";
import { MdConstruction } from "react-icons/md";

export default function Footer() {

    return (
        <footer className={style_footer.footer}>
            <div className={style_footer.footer_decoracion}></div>

            <div className={style_footer.footer_layout}>
                <div className={style_footer.footer_grid}>
                    <div className={style_footer.logo_sin_fondo_box}>
                        <MdConstruction className={style_footer.logo_sin_fondo_icono} />
                        <h1 className={style_footer.logo_sin_fondo_h1}>
                            Plomada
                        </h1>
                    </div>
                    <div className={style_footer.footer_links}>
                        <p className={style_footer.footer_copyright}>
                            Copyright © 2026 Pablo Daniel Chavez
                            <span className={style_footer.footer_divider}>|</span>
                            <Link 
                                href="https://portafolio-6jlx.onrender.com" 
                                target="_blank"
                                className={style_footer.footer_link_portafolio}
                            >
                                [Ver Portafolio]
                            </Link>
                            <span className={style_footer.footer_divider}>|</span>
                            Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}