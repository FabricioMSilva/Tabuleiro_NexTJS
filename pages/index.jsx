
import styles from '../styles/Home.module.css'
import Tabuleiro from "../components/Tabuleiro"


export default function Home() {


  return (
    <div className={styles.Geral}>
      <h1>Tabuleiro de Damas Feito em NextJS</h1>
      <Tabuleiro />
      <h4>Fabricio Silva Desenvolvedor FrontEnd</h4>
    </div>
  )




}