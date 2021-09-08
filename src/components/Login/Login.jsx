import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from "../../redux/auth-reducer"
import { Redirect } from 'react-router-dom';
import styles from './Login.module.css';
import photo from '../../assets/images/logo.png';
import classes from '../common/FormsControls/FormControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl }) => {

    return (

        <form  onSubmit={handleSubmit} className={styles.formCard}>
        <div>
            {/* {createField("Email", "email", [required], Input)} */}
           <Field className={styles.email} placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field className={styles.email} placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field  component={Input} name={"rememberMe"}type={"checkbox"} /> <h3>remember me</h3>
        </div>
        {captchaUrl && <img src={captchaUrl}/>}

        {captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {})}


        {error && <div className={classes.formSummaryError}>
                {error}
        </div> 
        }
        <div>
            <button>Sign in</button>
        </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for form
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit= (formData) =>{
        props.login(formData.email, formData.password, formData.rememnerMe, formData.captcha)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return <div className={styles.formBack}>  

    <div className={styles.form}>
        <div className={styles.img}>
            <img src={photo}></img>
        </div>
   
        <h1>Sign in.</h1>

        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>

    </div>
    
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} ) (Login);