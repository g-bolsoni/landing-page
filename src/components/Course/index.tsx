import Image from "next/image";
import { Button } from "../Button";
import styles from "./course.module.scss";

import image from "@/../public/scholl.svg"

export function Course() {
  return (
    <div className="container">
        <div className={styles.boxContainer}>
            <div className={styles.text}>
                <p>Você pode começar seus estudos agora!</p>
                <Button />
            </div>
            <div className={styles.img}>
                <Image
                    src={image}
                    alt="image"
                    width={392}
                    height={392} 
                />
            </div>
        </div>
    </div>
  )
}
