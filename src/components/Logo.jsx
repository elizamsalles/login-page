import styles from './Logo.module.css'
import logo from '../assets/logo.svg'

export function Logo(){
    return(
        <div className={styles.logo}>
            <img src={logo} alt="logo vertigo" />
        </div>
    )
}