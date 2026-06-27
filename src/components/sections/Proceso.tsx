import { FiMessageSquare, FiSearch, FiCalendar, FiTool, FiCheckCircle } from "react-icons/fi";
import styles from "@/styles/sections/proceso.module.scss";

const steps = [
  { icon: FiMessageSquare, title: "Consulta inicial", text: "Nos contás el problema, la ubicación y el tipo de servicio que necesitás." },
  { icon: FiSearch, title: "Diagnóstico", text: "Evaluamos el caso con fotos, una descripción o una visita técnica." },
  { icon: FiCalendar, title: "Coordinación", text: "Definimos día y horario según la urgencia y complejidad del trabajo." },
  { icon: FiTool, title: "Ejecución", text: "Trabajamos con herramientas adecuadas y cuidando cada detalle." },
  { icon: FiCheckCircle, title: "Revisión y garantía", text: "Verificamos el resultado y dejamos recomendaciones claras." },
];

export default function Proceso() {
  return (
    <section className={styles.section} id="proceso" aria-labelledby="proceso-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className="sectionLabel">Cómo trabajamos</span>
          <h2 id="proceso-title">Simple de coordinar.<br />Profesional de principio a fin.</h2>
          <p>Un proceso ordenado para que siempre sepas qué sigue y qué estás contratando.</p>
        </header>
        <ol className={styles.steps}>
          {steps.map(({ icon: Icon, title, text }, index) => (
            <li key={title}>
              <div className={styles.iconWrap}>
                <Icon aria-hidden="true" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
