import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import photo from '../../assets/images/logo.png';

const Nav = (props) => {
    return (
<nav className={classes.nav}>

<div className={classes.header}>
<img src={photo}></img>
</div>

  <div className={classes.item}>
    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
  </div>
  <div className={classes.item}>
    <a>News</a>
  </div>
  <div className={classes.item}>
    <a>Music</a>
  </div>

  <div className={classes.item}>
    <a>Settings</a>
  </div>


  <div className={classes.itemButton}>

      {props.isAuth 
      ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
      : <NavLink to={'/login'} className={classes.login}>Sign In</NavLink> }

    </div>
</nav>


    );
}

export default Nav;