import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/Killjoy.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let Users = ({currentPage,totalUsersCount,pageSize, onPageChanged,users,...props}) => {

    return <div>
    
        
        <div>
        {
           users.map(u => <User user={u} 
           followingInProgress = {props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
           key={u.id}/> 
               )

        }

        </div>
        <Paginator currentPage={currentPage} 
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount} 
        pageSize={pageSize}

        />
    </div>
}

export default Users;