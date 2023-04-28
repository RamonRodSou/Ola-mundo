import { Link } from 'react-router-dom'
import MenuLink from '../MenuLink'
import styles from './Menu.module.css'

export default function  Menu (){
    return (
        <header>
            <nav className={styles.navegacao}>
            <MenuLink to="index"> Inicio </MenuLink>
            <MenuLink to="/"> Sobre Mim </MenuLink>
            </nav>
        </header>
    )

}