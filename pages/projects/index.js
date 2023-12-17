import styles from './projects.module.css';
import { data } from '../../data/data';
import Link from 'next/link';

const allProjects = data.projects.map(project => {
    return (
        <article className={styles.projectArticle}>
            <h2>{project.name}</h2>
            <h3 className={styles.technologies}>Technologies:</h3>
            <ul className={styles.listOfTechnologies}>
                {project.technologies.map(techology => {
                    return (
                        <li key={techology} className={styles.technology}>
                            {techology}
                        </li>
                    )
                })}
            </ul>
            <h3>Discription:</h3>
            <p>{project.discription}</p>
            <a href={project.link}>Go to the project link</a>
        </article>
    )
})

export default function Projects() {
    return (
        <section className={styles.projectsSection}>
            { allProjects }
            <Link href={'./'} className={styles.linkToHome}>Go Back</Link>
        </section>
    )
}