import classes from './Post.module.css';
import userPhoto from '../../../../assets/images/Sage.png';
const Post = (props) => {

  return (
    <div>

      <div className={classes.item}>
        <img src={userPhoto}></img>{props.message}
        <div><span>like</span>{props.like}</div>

      </div>

    </div>

  );
}

export default Post;