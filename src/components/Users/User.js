import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/Killjoy.png';
import { NavLink } from 'react-router-dom';



let User = ({user,followingInProgress,unfollow,follow}) => {

    return (<div className={styles.home}>
                <span>
                    <div className={styles.userProfile}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>

                        <span>
                            <div className={styles.text}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        </div>
                    </span>

                        <div className={styles.followUnfollow}>
                    {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)} onClick={() => {unfollow(user.id);}} className={styles.button}>Unfollow</button>
                            : <button disabled={followingInProgress
                                .some(id => id === user.id)} onClick={() => {follow(user.id);}} className={styles.button}>Follow</button>}
                    </div>

                    

                    </div>
                   
                </span>

            
            </div>
           )
}

export default User;