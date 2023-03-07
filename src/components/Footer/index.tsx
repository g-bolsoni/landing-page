import Link from "next/link";
import Image from "next/image";
import styles from './footer.module.scss';
import logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <div className={styles.footer_container}>
        <div className={styles.logo}>
            <Link href="/">
                <Image
                    src={logo}
                    alt="Logo"
                />
            </Link>
            <span>CNPJ 34.699.395/0001-84</span>
        </div>
        <div className={styles.questions}>
            <h5 className={styles.title}>Dúvidas ou quer falar algo?</h5>
            <span>Caso queira falar com a gente ou tirar alguma dúvida sobre sua compra envie um e-mail para:</span>
            <span className={styles.email}><strong>guilherme@meucurso.com</strong></span>
        </div>
        <div className={styles.security}>
            <h5 className={styles.title}>Guilherme.com é um site seguro.</h5>
            <span><strong>Importante</strong></span>
            <span>Pagamentos por boletos podem levar até 3 dias úteis para a liberação do material.</span>
        </div>
    </div>
  )
}
