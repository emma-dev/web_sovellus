
import classes from './../Dialogs.module.css';
import userPhoto from '../../../assets/images/Reyna.png';

const Message = (props) => {

    return (

        
        <div className={classes.dialog}> 
        <img src={userPhoto}></img>
        
        {props.message}</div>


    );

}



export default Message;