import styles  from "./testimonials.module.scss";

export function TestimonialsBlue() {
  return (
    <div className={styles.containerColor}>
        <div className="container">
          <div className={styles.flexContainer}>
            <div className={styles.video}>
            <iframe width="450" height="240" src="https://www.youtube.com/embed/bkT5G5P9q6E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
            <div className={styles.testimonial}>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            </div>
          </div>
        </div>
    </div>
  )
}
  