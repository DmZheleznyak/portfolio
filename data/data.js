// icon Skills
import iconHtml from '../public/iconsSkills/html-5.png';
import iconCss from '../public/iconsSkills/css-3.png';
import iconJavasript from '../public/iconsSkills/java-script.png';
import iconReact from '../public/iconsSkills/atom.png';
import iconBoootstrap from '../public/iconsSkills/bootstrap.png';
import iconMaterial from '../public/iconsSkills/letter-m.png';
// icon Projects
import iconStar from '../public/iconsSkills/star.png';
import iconMovingStar from '../public/iconsSkills/moving-star.png';
import iconCarService  from '../public/iconsSkills/sport-car.png';
import iconCarServiceColor from '../public/iconsSkills/sport-car-color.png';
import iconLayout from '../public/iconsSkills/web-design.png';
import iconSpaceTourism from '../public/iconsSkills/startup.png';
import iconSpaceTourismColor from '../public/iconsSkills/startup-color.png';

export const data = {
    projects: [
        {
            name: 'Stars collection',
            link: 'https://dmzheleznyak.github.io/themoviedbAPI/',
            icon: iconStar,
            animationIcon: iconMovingStar,
            technologies: ['React', 'Redux', 'Redux-saga', 'Material UI'],
            discription: 'Application helps to find information about movie with Api themoviedb.org You can safe movie to list of favourite and even remove from that.'   
        },
        {
            name: 'Car service',
            link: 'https://dmzheleznyak.github.io/cool-hoz',
            icon:iconCarService,
            animationIcon: iconCarServiceColor,
            technologies: [ 'Html', 'Scss', 'Javascript', 'Gulp' ],
            discription: 'This site for the presentation firm. You can see the popup, the gallery for examples, using API Google Map for helping finding their address. Semantics and adaptability are available.'
        },
        {
            name: 'Free layout',
            link: 'https://dmzheleznyak.github.io/where/',
            icon: iconLayout,
            animationIcon: iconLayout,
            technologies: ['Html', 'Scss'],
            discription: 'This is a simple layout. Semantics and adaptability are available.'
        },
        {
            name: 'Space Tourism',
            link: 'https://main.d33qe7k5ddbu3o.amplifyapp.com',
            icon: iconSpaceTourism,
            animationIcon: iconSpaceTourismColor,
            technologies: ['React', 'Css'],
            discription: 'It is the single page application for the presentation information about firm. Semantics and adaptability are available.'
        }
    ],
    skills: [
        {
            name: 'Html',
            icon: iconHtml
        },
        {
            name: 'Css(Scss)',
            icon: iconCss
        },
        {
            name: 'Javascript',
            icon: iconJavasript
        },
        {
            name: 'React',
            icon: iconReact
        },
        {
            name: 'Bootstrap',
            icon: iconBoootstrap
        },
        {
            name: 'Material UI',
            icon: iconMaterial
        }
    ]
    // languages: [
    //     ''
    // ]
}