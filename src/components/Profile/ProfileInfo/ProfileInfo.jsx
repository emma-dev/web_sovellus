
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/Killjoy.png';

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={classes.block}>
         
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.small : userPhoto} />
                <div className={classes.text}><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
                </div>
        </div>

    );
}

export default ProfileInfo;