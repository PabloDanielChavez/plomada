import {
  MdOutlinePlumbing,
  MdWaterDrop,
  MdOutlineCleaningServices,
  MdOutlineLocalFireDepartment,
  MdOutlineWaterDamage,
  MdOutlineApartment,
} from "react-icons/md";
import styles from "@/styles/sections/servicios.module.scss";

const services = [
  {
    icon: MdOutlinePlumbing,
    title: "Plomería general",
    text: "Instalación y reparación de cañerías, griferías, sanitarios, válvulas, conexiones de agua y desagües.",
  },
  {
    icon: MdWaterDrop,
    title: "Pérdidas de agua",
    text: "Detección y solución de filtraciones, humedad, caños dañados y pérdidas visibles u ocultas.",
  },
  {
    icon: MdOutlineCleaningServices,
    title: "Destapaciones",
    text: "Desagües, rejillas, cloacas, piletas, baños, cocinas y cañerías tapadas.",
  },
  {
    icon: MdOutlineLocalFireDepartment,
    title: "Calefones y termotanques",
    text: "Instalación, revisión y reparación de sistemas de agua caliente en viviendas y comercios.",
  },
  {
    icon: MdOutlineWaterDamage,
    title: "Impermeabilización",
    text: "Tratamiento de filtraciones y humedad en terrazas, techos, balcones y paredes.",
  },
  {
    icon: MdOutlineApartment,
    title: "Empresas y consorcios",
    text: "Mantenimiento programado para edificios, oficinas, locales, administraciones y propiedades.",
  },
];

export default function Servicios() {
  return (
    <section className={styles.section} id="servicios" aria-labelledby="servicios-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <span className="sectionLabel sectionLabelLight">Nuestros servicios</span>
            <h2 id="servicios-title">Todo lo que tu instalación necesita</h2>
          </div>
          <p>
            Trabajos técnicos para resolver urgencias, prevenir problemas y mantener cada
            instalación funcionando como corresponde.
          </p>
        </header>
        <div className={styles.grid}>
          {services.map(({ icon: Icon, title, text }, index) => (
            <article className={styles.card} key={title}>
              <div className={styles.cardTop}>
                <Icon aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className={styles.cardLine} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
