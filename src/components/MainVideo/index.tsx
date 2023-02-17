import sytles from './mainVideo.module.scss'
export function MainVideo() {
  return (
    <div className="container">
        <div className={sytles.videoContainer}>
            <iframe width="70%" height="80%" src="https://www.youtube.com/embed/DeVsfHet-uA?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </div>
  )
}
