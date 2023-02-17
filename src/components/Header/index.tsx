import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/logo.svg";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className="container">
      <div className={styles.headerContainer}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={30}
            height={30}
            layout="responsive"   
          />
        </Link>
      </div>
    </header>
  )
}
