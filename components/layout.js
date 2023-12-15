import Head from "next/head";
import styles from './layout.module.css';
// import Header from './header';

export const siteTitle = 'Zhelezniak Dmitriy';

export default function Layout({ children }) {
    return(
        <div className={styles.container}>
            <Head>
                <meta 
                    charset="UTF-8" 
                    name="viewport" 
                    content="width=device-width" />
                <title>{siteTitle}</title>
                
            </Head>
            {/* <Header /> */}
            <main>{children}</main>
        </div>
    )
}; 
