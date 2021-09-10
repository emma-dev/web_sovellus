import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormControls.module.css";
import send from '../../../assets/images/send.png';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} className={s.infoForm}>

        

        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }


        <div className={s.string}>
        <div className={s.data}>Full Name</div> {createField("Full name", "fullName", [], Input)}
        </div>
        <div className={s.lookingJob}>
        <div className={s.data}>Looking for a job</div> { createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div className={s.string}>
        <div className={s.data}>My professional skills</div>  
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>


        <div className={s.string}>
        <div className={s.data}>About me</div>    
            { createField("About me", "aboutMe", [], Textarea  )}
        </div>
        {/* <div className={s.string}>
        <div className={s.data}>Contacts</div>   {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
            {key}: {createField(key, "contacts." + key, [], Input)}
            </div>
        })}
        </div> */}


<div className={s.edit}><button>Save</button></div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;