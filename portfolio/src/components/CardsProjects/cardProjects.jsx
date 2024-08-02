import styles from "./cardProjects.module.css";

export default function CardProjects({imgProject, nameProject, descriptionProject, technologiesProject, linkRepository, linkProject}) {
  return (
    <>
      <div className={styles.project_container}>
        <img className={styles.project_img} src={imgProject} alt="Imagem" />
        <h3 className={styles.project_name}>{nameProject}</h3>
        <p className={styles.project_description}>{descriptionProject}</p>
        <p className={styles.project_technologies}>{technologiesProject}</p>

        <div style={{ display: "flex", gap: "24px" }}>
          <a href={linkRepository} className={styles.button_project}>Acessar o projeto</a>
          <a href={linkProject} className={styles.button_repository}>Acessar o repositório</a>
        </div>
      </div>
    </>
  );
}
