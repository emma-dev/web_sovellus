import preloader from '../../../assets/images/loader_backinout.gif';
import styles from './preloader.module.css';


let Preloader = (props) => {
    return <div>
        <img src={preloader} className={styles.preloader}/>
    </div>
}


export default Preloader;