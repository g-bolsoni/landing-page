import styles  from "./testimonials.module.scss";

interface TestimonialsProps{
  videoUrl: string;
  videoTitle: string;
  isTitle: boolean;
}

export function TestimonialsBlue({videoUrl, videoTitle, isTitle = false}:TestimonialsProps) {
  return (
    <div className={styles.containerColor}>
        <div className="container">
          {isTitle ? <h3 className={styles.subtitle}>Veja alguns resultados dos alunos</h3> : '' }
          <div className={styles.flexContainer}>
            <div className={styles.video}>
              <iframe width="100%" height="100%" src={videoUrl} title={videoTitle} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
            <div className={styles.testimonial}>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            </div>
          </div>
        </div>
    </div>
  )
}
  