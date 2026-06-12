  "use client";
  import { useState, useEffect } from 'react';
  import styles_header from '@/styles/sections/header.module.scss';
  import { BiBriefcase, BiCog, BiEnvelope, BiHomeAlt2, BiMenu } from 'react-icons/bi';
  import { MdConstruction, MdInfoOutline, MdLocationOn, MdTimeline } from 'react-icons/md';

  export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        }, 
      []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menu = [
        { id: 1, titulo: "Inicio", target: "inicio", icono: <BiHomeAlt2 size={32} />},
        { id: 2, titulo: "Servicio", target: "servicio", icono: <BiBriefcase size={32} />},
        { id: 3, titulo: "Proceso", target: "proceso", icono: <BiCog size={32} />},
        { id: 4, titulo: "Sobre", target: "sobre", icono: <MdInfoOutline size={32} />},
        { id: 5, titulo: "Apuntamos", target: "apuntamos", icono: <MdLocationOn size={32} />},
    ];
    const scrollToSection = (targetId: string) => {
      const element = document.getElementById(targetId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setIsMenuOpen(false); // Cierra el menú en móvil
      }
    };

    return (
      <header className={`${styles_header.header} ${isScrolled ? styles_header.header_scrolled : ''}`}>
        <div className={styles_header.header_container}>
          <div className={styles_header.header_logo} aria-label="Plomada">
            <span className={styles_header.header_icon} aria-hidden="true">
              <MdConstruction size={28} style={{color: "#ff6037"}} />
            </span>
            <span>Plomada</span>
          </div>
          
          <div className={styles_header.header_actions}>
            <button 
              className={styles_header.header_menuBtn} 
              aria-label="Abrir menú de navegación"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <BiMenu size={32} />
            </button>
          </div>
        </div>
        <nav className={`${styles_header.header_nav}`} aria-label="Navegación principal">
          <ul className={`${styles_header.header_ul} ${isMenuOpen ? styles_header.header_activo : styles_header.header_desactivado}`}>
            {menu.map((menu) => (
              <li 
                key={menu.id} 
                className={styles_header.header_li} 
                aria-label={`Navegacion ${menu.titulo}`}
                onClick={() => scrollToSection(menu.target)}  
              >
                {menu.icono}
                <span className={styles_header.header_spanNav}>{menu.titulo}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }