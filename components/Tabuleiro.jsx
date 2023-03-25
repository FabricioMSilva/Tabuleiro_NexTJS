
import styles from '../styles/Home.module.css'
import Linha from "../components/Linha"


export default function Tabuleiro() {


  return (
    <div className={styles.Geral}>

      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />


    </div>
  )




}