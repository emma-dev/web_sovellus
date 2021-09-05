import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { PureComponent } from 'react';

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {

    let postsElements = 
    [...props.posts]
        .reverse()
        .map(p => <Post message={p.message} like={p.like} />);


    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);

    }

    return (
        <div>

            <div className={classes.postsBlock}>
                <h2>My posts</h2>
                <AddNewPostFormRedux onSubmit={onAddPost} />
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    );


})


const AddNewPostForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} >
        <div>
            <Field component={Textarea} placeholder={"Post Message"} name="newPostText" validate={[required, maxLength10]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"}) (AddNewPostForm);

export default MyPosts;