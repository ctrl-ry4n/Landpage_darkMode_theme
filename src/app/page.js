'use client'
import { useState } from 'react'
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const [menuAberto, setMenuAberto] = useState();

    function toogleTheme(){
      setMenuAberto(!menuAberto)
      console.log(setMenuAberto)
    };


  return (
    <>
      <header className={styles.header_darkMode}>
        <h1>Coffe Shop</h1>
        <button onClick={toogleTheme} >{menuAberto ? "sol" : "lua"}</button>
      </header>
      <main className={menuAberto ? styles.main_lightMode : styles.main_darkMode}>
        <h2>A melhor cafeteria do Brasil</h2>
          <p>Venha conhecer a melhor cafeteria do Brasil!
            Localizada no coração de São Paulo, oferecemos cafés artesanais de alta qualidade e um ambiente acolhedor.
            Desfrute de nossas bebidas exclusivas e deliciosos acompanhamentos enquanto relaxa em um espaço único.
            Esperamos por você para uma experiência inesquecível!
          </p>
            <button>Nossas Lojas</button>
        
      </main>
      <footer className={styles.footer_lightMode}>
        
      </footer>
    </>
  );
}
