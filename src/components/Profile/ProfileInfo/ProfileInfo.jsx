
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
                
                <div className={classes.text}><ProfileStatusWithHooks status={status} updateStatus={updateStatus} /></div>
                <div className={classes.chooseFoto}> {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}</div>
                {editMode 
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> 
                : <ProfileData   goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
              
           
              
            </div>
        </div>

    );
}

const ProfileData =({profile, isOwner, goToEditMode}) => {
return <div className={classes.info}>

<div className={classes.string}>
    <div className={classes.data}>Full Name</div> {profile.fullName}
    </div>

<div className={classes.string}>
<div className={classes.data}>Looking for a job</div> {profile.lookingForAJob ? "yes" : "no"}
</div>

{profile.lookingForAJob &&
<div>
<div className={classes.data}>My professional skills</div> {profile.lookingForAJobDescription}
</div>
}

<div className={classes.string}>
<div className={classes.data}>About me</div> {profile.aboutMe}
</div>

{isOwner && <div className={classes.edit}><button onClick={goToEditMode}>Edit</button></div>}
{/* <div>
    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
})}
</div> */}
</div>
}


    

const Contact = (contactTitle, contactValue) =>{
return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;