
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import search from '../../assets/images/Icon.png';
import send from '../../assets/images/send.png';
const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);


    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} />);

    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to='/login' />;
    return (
<div className={classes.blok}>
    <div className={classes.chatBlok}>
                <h2>CHAT<span>APP</span></h2>
                <div className={classes.search}>
                    <img src={search} />
                </div>
                </div>

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>

        </div>
        </div>
    );

}

const AddMessageForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit} >

            <div className={classes.posts}>
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Type message..." />
            </div>
            <div className={classes.send}><button><img src={send} /></button></div>

        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;