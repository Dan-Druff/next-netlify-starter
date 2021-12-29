import navStyles from '../styles/ComponentStyles.module.css';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/login'>Login</Link>
                    </li>
                    <li>
                        <Link href='/dashboard'>Dashboard</Link>
                    </li>
                    
                </ul>
        </nav>
    )
}

export default Nav
