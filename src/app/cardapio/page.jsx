'use client'
import { useState } from 'react'
import Image from "next/image";
import styles from "../cardapio/cardapio.module.css"
import { CiDark } from "react-icons/ci";
import { CiBrightnessUp } from "react-icons/ci";
import Link from 'next/link'

    
export default function PaginaCardapio(){
    const [alteraTema, setAlteraTema] = useState(true);

    function toogleTheme(){
      setAlteraTema(!alteraTema)
    };


    return(
    <>
        <header className={alteraTema ? styles.header_lightMode : styles.header_darkMode}>
        <Link href="/">Voltar para Home</Link>
        <h1>Cardapio</h1>
        <button onClick={toogleTheme} className={alteraTema ? styles.button_lightMode : styles.button_darkMode}> { alteraTema ? <CiDark/> : <CiBrightnessUp/> }</button>
        </header>
        <main className={alteraTema ? styles.main_lightMode : styles.main_darkMode}>
        <h2>A melhor cafeteria do Brasil</h2>
          <p>Venha conhecer a melhor cafeteria do Brasil!
            Localizada no coração de São Paulo, oferecemos cafés artesanais de alta qualidade e um ambiente acolhedor.
            Desfrute de nossas bebidas exclusivas e deliciosos acompanhamentos enquanto relaxa em um espaço único.
            Esperamos por você para uma experiência inesquecível!
          </p>
            <button>Nossas Lojas</button>
        </main>
    </>
    )
}