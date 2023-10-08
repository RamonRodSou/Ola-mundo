import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
    return (

        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}> Olá, Mundo</h1>
                <p className={styles.paragrafor}>
                    Boas vindas ao meu espaço pessoal! Eu sou Ramon Rodrigues, desenvolvedor Front-End. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src='http://github.com/ramonrodsou.png'
                    alt='Foto do Ramon'
                    aria-hidden={true}
                />
            </div>
        </div>
    )
}