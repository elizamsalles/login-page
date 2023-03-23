import styles from './Logo.module.css'

export function Logo(){
    return(
        <div className={styles.logo}>
            <img src="src\assets\logo.svg" alt="logo vertigo" />
        </div>
    )
}