import { FiClock, FiFileText, FiShield, FiTool } from "react-icons/fi";
import styles from "@/styles/sections/bienvenida.module.scss";

const benefits = [
  { icon: FiClock, title: "Respuesta rápida", text: "Priorizamos urgencias y coordinamos según tu zona." },
  { icon: FiFileText, title: "Presupuesto claro", text: "Te explicamos el alcance antes de comenzar." },
  { icon: FiTool, title: "Trabajo prolijo", text: "Cuidamos el espacio y resolvemos con criterio técnico." },
  { icon: FiShield, title: "Garantía real", text: "Revisamos el resultado y respondemos por el trabajo." },
];

export default function Bienvenida() {
  return (
    <section className={styles.section} aria-labelledby="beneficios-title">
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className="sectionLabel">Por qué elegir Plomada</span>
          <h2 id="beneficios-title">Un servicio pensado para darte tranquilidad</h2>
        </div>
        <div className={styles.grid}>
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <article className={styles.card} key={title}>
              <span className={styles.number}>0{index + 1}</span>
              <Icon className={styles.icon} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
