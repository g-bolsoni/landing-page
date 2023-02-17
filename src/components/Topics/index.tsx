import { Button } from '../Button';
import styles from './topics.module.scss';

export function Topics() {
  return (
    <div className="container">
        <div className={styles.topicsContainer}>
            <div className={styles.content}>
              <h2 className={styles.title}>Primeiro, chamamos sua atenção prometendo um resultado mágico.</h2>
              <ul>
                  <li>Como usar o poder de inteligência do Google e Facebook para criar uma fonte de renda inacreditavelmente alta.</li>
                  <li>Qual o melhor jeito de começar aproveitando os recursos que estão a sua disposição (e você não consegue enxergar), e superar suas possíveis limitações</li>
                  <li>Como criar um projeto protótipo e fazer a sua primeira venda em pouco tempo e gastando pouco dinheiro;</li>
              </ul>
              <Button />
            </div>
        </div>
    </div>
  )
}

