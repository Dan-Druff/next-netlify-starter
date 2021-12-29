import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';
const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={styles.layoutDiv}>
           
            <Header title="cryptocrash"/>
            <main className={styles.layoutMain}>{children}</main>
        </div>
        </>
    )
}

export default Layout
