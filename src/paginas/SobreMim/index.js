import styles from './Sobremim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>Lorem ipsum dolor</h3>

            <img src={fotoSobreMim} alt="Foto sorrindo" className={styles.fotoSobreMim}/>

            <p className={styles.paragrafo} >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <p className={styles.paragrafo} >Explicabo sequi qui similique, placeat suscipit quas rerum, eaque pariatur id aliquid ullam maxime omnis voluptas fugit asperiores aperiam iste doloribus est?</p>

            <p className={styles.paragrafo} >Explicabo sequi qui similique, placeat suscipit quas rerum, eaque pariatur id aliquid ullam maxime omnis voluptas fugit asperiores aperiam iste doloribus est?</p>

            <p className={styles.paragrafo} >Explicabo sequi qui similique, placeat suscipit quas rerum, eaque pariatur id aliquid ullam maxime omnis voluptas fugit asperiores aperiam iste doloribus est? Explicabo sequi qui similique, placeat suscipit quas rerum, eaque pariatur id aliquid ullam maxime omnis voluptas fugit asperiores aperiam iste doloribus est?</p>
        </PostModelo>
    )
}