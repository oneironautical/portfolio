/* 
todo:   make background height and width, opacity, and position depend on properties. 
        make video source depend on property

*/
import styles from './VideoOverlay.module.css'
function VideoOverlay() {
    return (
        <div id="videoOverlay" className={styles.videoOverlay} />
    );
}

export default VideoOverlay;