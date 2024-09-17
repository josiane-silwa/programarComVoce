import styles from './Main.module.css'
import Carrossel from '../Carrossel/index'

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <Carrossel className='carousel-container'/>
    </div>
  )
}

export default Main
