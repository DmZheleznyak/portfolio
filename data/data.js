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
            animationIcon: iconMovingStar
        },
        {
            name: 'Car service',
            link: 'https://dmzheleznyak.github.io/cool-hoz',
            icon:iconCarService,
            animationIcon: iconCarServiceColor
        },
        {
            name: 'Free layout',
            link: 'https://dmzheleznyak.github.io/where/',
            icon: iconLayout,
            animationIcon: iconLayout
        },
        {
            name: 'Space Tourism',
            link: 'https://main.d33qe7k5ddbu3o.amplifyapp.com',
            icon: iconSpaceTourism,
            animationIcon: iconSpaceTourismColor
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