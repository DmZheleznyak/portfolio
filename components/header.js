import Image from 'next/image';
import logoMain from '../public/images/goal.gif';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src={logoMain}
                alt='Main Logo'
                className={styles.logo} 
                priority  
            />
        {/* image 
                in home - image with main info
                    in other pages without image with main info maybe just logo */}
        </header>
    )
}