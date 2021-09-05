
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/Killjoy.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader />
    }

const onMainPhotoSelected = (e) => {
    if(e.target.files.length){
       savePhoto(e.target.files[0]);
    }
}

    return (
        <div className={classes.block}>
         
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div className={classes.text}><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
                </div>
        </div>

    );
}

export default ProfileInfo;