import styles from "./button.module.scss";
export function Button() {
  return (
    <>
          <button className={styles.buy_btn}>  
            <a href="https://pay.hotmart.com/G77948095B" target="_blank">
              Comprar
            </a>
          </button>
    </>
  )
}
