'use client'
import { useState } from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import { CiDark } from "react-icons/ci";
import { CiBrightnessUp } from "react-icons/ci";
import Topo from '@/app/components/topo/Topo'
import Link from 'next/link'

export default function Home() {
    const [alteraTema, setAlteraTema] = useState(true);

    function toogleTheme(){
      setAlteraTema(!alteraTema)
    };


  return (
    <>
      <header className={alteraTema ? styles.header_lightMode : styles.header_darkMode}>
        <h1>Coffe Shop</h1>
        <Link href="./sobre">Sobre</Link>
        <button onClick={toogleTheme} className={alteraTema ? styles.button_lightMode : styles.button_darkMode}> { alteraTema ? <CiDark/> : <CiBrightnessUp/> }</button>
      </header>
      <main className={alteraTema ? styles.main_lightMode : styles.main_darkMode}>
        <h2>A melhor cafeteria do Brasil</h2>
          <p>Venha conhecer a melhor cafeteria do Brasil!
            Localizada no coração de São Paulo, oferecemos cafés artesanais de alta qualidade e um ambiente acolhedor.
            Desfrute de nossas bebidas exclusivas e deliciosos acompanhamentos enquanto relaxa em um espaço único.
            </p>
           <p>Esperamos por você para uma experiência inesquecível!</p>
            <button>Cardápio</button>
            <Link href="./cardapio">teste</Link>
          </main>
      <footer className={styles.footer_lightMode}>
        
      </footer>
    </>
  );
}
