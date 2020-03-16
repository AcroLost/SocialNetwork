import React from 'react';

import s from './Friends.module.css';

const Friends = ({ friends }) => {

    const friend = friends.map((item) => {

        const { id, photo, name } = item;

        return (
            <div className={s.friend} key={id}>

                <img src={photo} alt="ava" />

                <p>{name}</p>
            </div>
        );
    })

    return (
        <div className={s.friendsBlock}>
            <h3>Friends</h3>
            <div className={s.friends}>
                {friend}
            </div>
        </div>
    );
}

export default Friends;