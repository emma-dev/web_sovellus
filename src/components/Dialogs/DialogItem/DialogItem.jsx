import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';
import userPhoto from '../../../assets/images/Viper.png';


const DialogItem = (props) => {
    return (
        <div className={classes.block}>
           
            <img src={userPhoto}/>
           <div className={classes.did}>
            <NavLink className={classes.dialogItems} to={"/dialogs/" + props.id}> {props.name} </NavLink>
            <h4>02 Feb</h4>
            </div>
        </div>

    );
}

// className={classes.dialog + ' ' + classes.active}



export default DialogItem;