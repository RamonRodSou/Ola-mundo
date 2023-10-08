import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";


export default function SobreMim () {

    return ( 
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >

            <h3 className={styles.subtitulo}>
                Olá, eu sou o Ramon!
            </h3>
            <img 
                src='https://cdn.discordapp.com/attachments/1078331260377776219/1160578507638845440/eu11.jpg?ex=65352bf6&is=6522b6f6&hm=8cc8ce0405c1f98cd746944ca73d10611e7b3cf02cd2d0f7b1636a2736330f2b&'
                alt="Foto do Ramon Rod Sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor Front-end e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou em meiado de outubro de 2022, quando decidir iniciar um curso de lógica de programação com a tecnologia JAVA.
            </p>
            <p className={styles.paragrafo}>
            Em novembro do mesmo ano, fui agraciado com uma oportunidade única: o programa One Next Education, em parceria com a Oracle e a Alura. Durante esse programa, tive a oportunidade de expandir meus horizontes no mundo da tecnologia. Fui capaz de mergulhar profundamente em áreas como Front-End e Data Science, e o mais importante, conhecer pessoas incríveis e formar novas amizades. 
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
            </p>
            <p className={styles.paragrafo}>
                E foi enquanto eu decidir cursar Analise e Desenvolvimento de Sistema.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados.
            </p>        
        
            </PostModelo>
    )
}