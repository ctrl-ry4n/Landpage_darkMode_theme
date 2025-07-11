'use client'
import { useState } from 'react'
import Image from "next/image";
import styles from "../sobre/sobre.module.css"
import { CiDark } from "react-icons/ci";
import { CiBrightnessUp } from "react-icons/ci";
import Topo from '@/app/components/topo/Topo'

    
export default function NovaPagina(){
/*    const [alteraTema, setAlteraTema] = useState(true);

    function toogleTheme(){
      setAlteraTema(!alteraTema)
    };

 */
    return(
    <>
        <Topo/>
        <main className={styles.main_lightMode}>
          <section class="sobre">
  <h2>Sobre Nós</h2>
  
  <p>Nossa cafeteria nasceu da paixão por café e bons encontros. Acreditamos que cada xícara carrega histórias, memórias e momentos de pausa no dia a dia. Aqui, unimos sabor, aconchego e qualidade em um ambiente pensado para você relaxar, trabalhar ou simplesmente apreciar um bom café.</p>
  
  <p>A história começou em 2023, quando dois amigos — <strong>Clara</strong> e <strong>Miguel</strong> — decidiram transformar o antigo sobrado da família, no coração do bairro <strong>Vila Aurora</strong>, em um refúgio para os amantes de café. Movidos pela vontade de compartilhar sabores e boas conversas, criaram um espaço onde cada detalhe é pensado para acolher.</p>
  
  <p>Desde então, a <strong>Cafeteria Aurora</strong> tem sido palco de encontros, novos projetos e muitas histórias acompanhadas do aroma do café passado na hora.</p>
  
  <p>Aqui, cada xícara é servida com dedicação e aquele toque caseiro que transforma o simples em especial.</p>
</section> 
        <button>Ver Unidades</button>
        </main>
    </>
    )
}