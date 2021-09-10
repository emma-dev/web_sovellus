import classes from './Post.module.css';
import userPhoto from '../../../../assets/images/Sage.png';
const Post = (props) => {

  return (

   

    <div className={classes.block}>
 
      <div className={classes.item}>
        <img src={userPhoto}></img>


        <div className={classes.like}>
          

          <div className={classes.number}>{props.like}</div>

        </div>
<div className={classes.message}>{props.message}</div>


      </div>



    </div>
     
  );
}

export default Post;