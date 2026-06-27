import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import styles from "@/styles/sections/sobre.module.scss";
import { WHATSAPP_URL } from "@/data/site";

const commitments = ["Diagnóstico honesto", "Materiales adecuados", "Comunicación directa"];

export default function Sobre() {
  return (
    <section className={styles.section} id="nosotros" aria-labelledby="nosotros-title">
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.brandBlock}>
            <span className={styles.monogram} aria-hidden="true">P</span>
            <span>Plomada</span>
            <small>Soluciones técnicas</small>
          </div>
          <p className={styles.quote}>“No alcanza con tapar el problema. Hay que resolverlo bien.”</p>
          <div className={styles.detail}>
            <span>Buenos Aires</span>
            <span>Hogares + Empresas</span>
          </div>
        </div>

        <div className={styles.content}>
          <span className="sectionLabel">Sobre Plomada</span>
          <h2 id="nosotros-title">Oficio, criterio técnico y una forma clara de trabajar</h2>
          <p>
            Sabemos que una pérdida de agua, una cañería tapada o una instalación mal
            resuelta puede alterar por completo un hogar, una empresa o un edificio.
          </p>
          <p>
            Por eso brindamos un servicio de plomería y mantenimiento enfocado en la
            respuesta ágil, la transparencia y la calidad. Buscamos resolver el problema
            de raíz, cuidar el lugar y dejar cada trabajo correctamente terminado.
          </p>
          <ul>
            {commitments.map((item) => (
              <li key={item}><FiCheckCircle aria-hidden="true" />{item}</li>
            ))}
          </ul>
          <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.button}>
            <FaWhatsapp aria-hidden="true" /> Solicitar servicio
          </Link>
        </div>
      </div>
    </section>
  );
}
