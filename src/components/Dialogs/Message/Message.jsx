
import classes from './../Dialogs.module.css';
import userPhoto from '../../../assets/images/Reyna.png';

const Message = (props) => {

    return (

        <div className={classes.newBlock}>
       
       <img src={userPhoto}></img>
        <div className={classes.messagesColor}>
        {props.message}
        </div>
        </div>
    );

}



export default Message;