import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import Image from 'next/image';
import Link from 'next/link';
import mainPicture from '../public/images/Zhelezniak_Dmitriy.jpg';
import styles from './index.module.css';
import {data} from '../data/data';

// это позже
// const moveToLinkProject = (e) => {
//     console.log(e.target.textContent, 'textContent');
//     console.log(e.target, ' e target');

//     // console.log(node.e.target, 'node e target');
// }

const ListOfProjects = data.projects.map(project => {
    return (
        <li className={styles.itemOfProjects} key={project.name}>
            <a href={project.link}>{project.name}</a>
            {/* <Image 
                priority
                src={project.animationIcon}
                alt='animation icon skill' 
                // className={styles.iconsProjects}
                className={  
                    `${styles.hiddenIconProjects}
                    `
                    // add this class when function go to link with animation
                    // ${styles.animationIconsCarProjects}
                    // ${styles.animationIconsSpaceProjects}
                }
            /> */}
        </li>
    )
})

// при переходе по ссылке запустить небольшую анимация связанную с темой проекта

const ListOfSkills = data.skills.map(skill => {
    return <li className={styles.skills} key={skill.name} >{skill.name} 
        <Image 
            priority
            src={skill.icon}
            alt='icon skill' 
            className={styles.iconsSkills}
        />
    </li>
})

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <div className={styles.mainInfo}>
                    <Image
                        priority
                        src={mainPicture}
                        alt='My photo'
                        className={styles.mainPicture}
                     />
                    <article className={styles.mainInfoArticle}>
                        <h1>Zhelezniak Dmitriy</h1>
                        <h2>Front-End Developer</h2>
                        <p className={styles.mainInfoArticleText}>
                            Budapest, Hungary<br />
                            +36 20 3416334<br />
                            zheleznjak.dm@gmail.com<br />
                            <a href='https://github.com/DmZheleznyak'>https://github.com/DmZheleznyak</a>   
                        </p>
                    </article>
                </div>
                <div className={styles.listOfInformation}>
                    <article>
                        <h3>Skills:</h3>
                        <ul className={styles.listOfSkills}>{ ListOfSkills }</ul>
                    </article>
                    <article>
                        <h3>Education:</h3>
                        <div className={styles.yearsOfEducation}>2008 - 2013</div>
                        <p className={styles.textOfInformation}>
                        Kharkov Polytechnic Institute - “Management organization and personnel administration”
                        </p>
                        <div className={styles.yearsOfEducation}>2018</div>
                        <p className={styles.textOfInformation}>
                        “A - Level” (IT school) - “Front-End”
                        </p>
                    </article>
                    <article>
                    <h3>About me:</h3>
                    <p className={styles.textAboutMe}>I had studied in the school “A-Level”, in which I had taken basic knowledge of this technologies: 
                    HTML, CSS, Javascrip, Bootstrap, React, Git.<br />
                    Additionally recieved skills on the platform “Udemy”, main accent was on the React library.
                    I had internship during mounth in the company “CHI Software” - markup, deep learning Javascript.<br />
                    I’m interesting in position trainee, because I haven’t expirience in commercial projects.</p>                       
                    </article>
                    <article>
                        <h3>Projects:</h3>
                        <ul className={styles.listOfProjects}>{ ListOfProjects }</ul>
                        <Link href={'./projects'} className={styles.linkToProjects}>More details</Link>
                    </article>
                    <article>
                    <h3>Languages:</h3>
                        <ul className={styles.listOfLanguage}>  
                            <li>Russian</li>
                            <li>Ukraine</li>
                            <li>English (speaking, reading documentation with dictonary)</li>
                        </ul>
                    </article>
                </div>
            </section>
        </Layout>
    )
}   