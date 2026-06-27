import {
  FiHome,
  FiBriefcase,
  FiGrid,
  FiMap,
  FiKey,
  FiUsers,
  FiMapPin,
} from "react-icons/fi";
import styles from "@/styles/sections/apuntamos.module.scss";

const audiences = [
  { icon: FiHome, label: "Propietarios de viviendas" },
  { icon: FiBriefcase, label: "Empresas y oficinas" },
  { icon: FiGrid, label: "Consorcios y edificios" },
  { icon: FiMap, label: "Barrios privados" },
  { icon: FiKey, label: "Inmobiliarias" },
  { icon: FiUsers, label: "Administradores" },
];

export default function Apuntamos() {
  return (
    <section className={styles.section} id="cobertura" aria-labelledby="cobertura-title">
      <div className={styles.container}>
        <div className={styles.audiences}>
          <span className="sectionLabel">A quiénes ayudamos</span>
          <h2>Servicios para hogares, empresas y consorcios</h2>
          <p>
            Nos adaptamos a las necesidades y tiempos de cada propiedad, desde una reparación
            puntual hasta un plan de mantenimiento integral.
          </p>
          <div className={styles.audienceGrid}>
            {audiences.map(({ icon: Icon, label }) => (
              <div className={styles.audience} key={label}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.coverage}>
          <div className={styles.coverageTop}>
            <span className={styles.status}><i aria-hidden="true" /> Cobertura activa</span>
            <span>BA — ARG</span>
          </div>
          <div className={styles.map} aria-hidden="true">
            <span className={styles.ringOne} />
            <span className={styles.ringTwo} />
            <span className={styles.pin}><FiMapPin /></span>
            <span className={styles.mapLabel}>CABA</span>
            <span className={styles.north}>N</span>
          </div>
          <div className={styles.coverageText}>
            <span className="sectionLabel sectionLabelLight">Zona de cobertura</span>
            <h2 id="cobertura-title">Buenos Aires y alrededores</h2>
            <p>
              Atendemos en CABA, GBA y zonas cercanas. Consultanos por WhatsApp para
              confirmar disponibilidad según ubicación, horario y tipo de servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
