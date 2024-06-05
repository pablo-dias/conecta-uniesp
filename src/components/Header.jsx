import styles from './Header.module.css'
import logoUniesp from '../assets/logoUniesp.svg'

export function Header (){
    return (
        <header className={styles.header}>
            <img src={logoUniesp} alt="Logotipo do ignite" />
        </header>
    )
}