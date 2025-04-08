import styles from './NavBar.module.css'
import navBarimg1 from '../../../public/images/Rectangle22.png'
import navBarimg2 from '../../../public/images/Rectangle23.png'
import navBarimg3 from '../../../public/images/Rectangle24.png'
import navBarimg4 from '../../../public/images/Rectangle25.png'
import navBarimg5 from '../../../public/images/Rectangle26.png'

export function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.navBarContent}>
                <ul>
                    <li><img src={navBarimg1} />Et integer facilisi eget</li>
                    <li><img src={navBarimg2} />Et integer facilisi eget</li>
                    <li><img src={navBarimg3} />Et integer facilisi eget</li>
                    <li><img src={navBarimg4} />Et integer facilisi eget</li>
                    <li><img src={navBarimg5} />Et integer facilisi eget</li>
                </ul>
            </div>
        </div>
    );
}