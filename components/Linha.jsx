
import MiniBloco from "../components/MiniBloco"
import styles from '../styles/Home.module.css'
export default function Linha(props) {

    return (
        <div className={styles.linha}>

            <MiniBloco preta={props.preta} />
            <MiniBloco preta={!props.preta} />
            <MiniBloco preta={props.preta} />
            <MiniBloco preta={!props.preta} />
            <MiniBloco preta={props.preta} />
            <MiniBloco preta={!props.preta} />
            <MiniBloco preta={props.preta} />
            <MiniBloco preta={!props.preta} />
        </div>
    )


}