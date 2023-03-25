import styles from '../styles/Home.module.css'

export default function MiniBloco(props) {

    return (
        <div
            className={styles.miniBloco}
            style={{
                backgroundColor: props.preta ? "black" : "white",
                color: props.preta ? "white" : "black"

            }}

        >
            
        </div>
    )



}
