import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import Image from 'next/image';
import Link from 'next/link';
import mainPicture from '../public/images/Zhelezniak_Dmitriy.jpg';
import styles from './index.module.css';
import {data} from '../data/data';
import { useState } from 'react';

import { useInView } from 'react-intersection-observer';

export default function Home() {

    // to show element during scroll
    const [refAboutMe, inViewAboutMe, entryAboutMe] = useInView({
        /* Optional options */
        threshold: 0,
    });

    const [refEducation, inViewEducation, entryEducation] = useInView({
        /* Optional options */
        threshold: 0,
    })

    // to show photo
    const [showPhoto, setShowPhoto] = useState(false);
    const functionShowPhoto = () => setShowPhoto(!showPhoto);

    const ListOfProjects = data.projects.map(project => {
            return (
                <li className={styles.itemOfProjects} key={project.name}>
                    <a href={project.link}>{project.name}</a>                           
                </li>
            )
        })

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
                        className={showPhoto ? styles.mainPictureShow : styles.mainPictureDontShow}
                     /> 
                    <div
                        className={showPhoto ? styles.containerButtonMainPictureDontShow : styles.containerButtonMainPictureShow}>
                        <button 
                            className={styles.buttonMainPicture}
                            onClick={functionShowPhoto}>
                                Show Photo
                        </button>    
                    </div> 
                    <article className={styles.mainInfoArticle}>
                        <h1>Zhelezniak Dmitriy</h1>
                        <h2 className='textAnimation'>Front-End Developer</h2>
                        <p className={styles.mainInfoArticleText}>
                            Stalham, United Kingdom<br />
                            +44 73 59992850<br />
                            zheleznjak.dm@gmail.com<br />
                            {/* <a href='https://github.com/DmZheleznyak'>https://github.com/DmZheleznyak</a>    */}
                        </p>
                    </article>
                </div>
                <div className={styles.listOfInformation}>
                    <article>
                        <h3>Skills:</h3>
                        <ul className={styles.listOfSkills}>{ ListOfSkills }</ul>
                    </article>
                    <article 
                        className={ inViewEducation ? styles.showEducation : styles.education }  ref={refEducation}>
                        <h3>Education:</h3>
                        <div className={styles.yearsOfEducation}>2008 - 2013</div>
                        <p className={styles.textOfInformation}>
                        Kharkiv Polytechnic Institute - “Management organization and administration”
                        </p>
                        <div className={styles.yearsOfEducation}>2018</div>
                        <p className={styles.textOfInformation}>
                        “A - Level” (IT school) - “Front-End”
                        </p>
                    </article>
                    <article 
                        className={ inViewAboutMe ? styles.showAboutMe : styles.aboutMe }  ref={refAboutMe}>
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
                            <li>English (B1)</li>
                        </ul>
                    </article>
                </div>
            </section>
        </Layout>
    )
}   
