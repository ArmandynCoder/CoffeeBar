import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.navBarContent}>
                <ul>
                    <li><img src="../public/img/Rectangle22.png" />Et integer facilisi eget</li>
                    <li><img src="../public/img/Rectangle23.png" />Et integer facilisi eget</li>
                    <li><img src="../public/img/Rectangle24.png" />Et integer facilisi eget</li>
                    <li><img src="../public/img/Rectangle25.png" />Et integer facilisi eget</li>
                    <li><img src="../public/img/Rectangle26.png" />Et integer facilisi eget</li>
                </ul>
            </div>
        </div>
    );
}