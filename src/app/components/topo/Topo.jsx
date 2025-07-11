import styles from '@/app/components/topo/Topo.module.css'
import { CiDark } from "react-icons/ci";
export default function Topo(){
    return(
        <>
        <header className={/* alteraTema ? */ styles.header_lightMode /* : styles.header_darkMode */ }>
        <h1>Coffe Shop</h1>
        <button /* </header>onClick={toogleTheme} */className= {/*alteraTema  ? */ styles.button_lightMode /* : styles.button_darkMode */}> { /* alteraTema ? */ <CiDark/>/* : <CiBrightnessUp/>*/ }</button>
      </header>
        </>
    )
};
