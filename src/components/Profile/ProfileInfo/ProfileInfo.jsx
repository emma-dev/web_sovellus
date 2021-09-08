
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/Killjoy.png';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile  }) => {


let[editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

const onSubmit =(formData) => {
 saveProfile(formData).then(() => {
    setEditMode(false);
 });
  }


    return (
        <div className={classes.block}>

            <div className={classes.descriptionBlock}>
                {/* profile.photos.large ||   */}
                <img src={userPhoto} />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                {editMode 
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
                : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
                    <ProfileData profile={profile} />

                <div className={classes.text}><ProfileStatusWithHooks status={status} updateStatus={updateStatus} /></div>
            </div>
        </div>

    );
}

const ProfileData =({profile, isOwner, goToEditMode}) => {
return <div>
   {isOwner &&  <div><button onClick={goToEditMode}>edit</button></div>}
                    <div>
                        Full name: {profile.fullName}
                    </div>

                    <div>
                        Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {profile.lookingForAJob &&
                        <div>
                            My professional skills: {profile.lookingForAJobDescription}
                        </div>
                    }
                    <div>
                        About me: {profile.aboutMe}
                    </div>

                    <div>
                    {/* {Object.keys(profile.contacts).map(key => {
                               return <Contact  key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                            })}  */}
                    </div>

                </div>
}


    

const Contact = (contactTitle, contactValue) =>{
return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;