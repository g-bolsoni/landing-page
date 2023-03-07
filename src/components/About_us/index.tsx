import styles from './about_us.module.scss';
import Image from "next/image";

import img from '@/assets/guilherme.png';

export function AboutUs() {
  return (
    <div className={styles.aboutUs_container}>
      <div className="container">
        <h3 className={styles.title}>Venha participar da nossa familia</h3>
        <div className={styles.sectionContainer}>
          <div className={styles.img}>
            <Image
              src={img}
              alt="Foto Perfil"
            />
          </div>
          <div className={styles.article}>
            <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico.</p>
            <p>Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC.</p>
            <p>Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia.</p>
          </div>
        </div> 
        <div className={styles.button}>
          <a href="https://pay.hotmart.com/G77948095B" target="_blank" >
            <button>
              Quero me inscrever agora
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
