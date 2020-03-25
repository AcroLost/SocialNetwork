import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const changeStatus = (event) => {
        setStatus(event.target.value)
    }

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {

        setEditMode(false)
        props.updateUserStatus(status)
    }


    return (
        <div>Статус:
            {!editMode

                ? <span className={s.status}
                    onClick={activateMode}> {props.status || "Status will be here"}</span>

                : <input autoFocus
                    onBlur={deactivateMode}
                    value={status}
                    onChange={changeStatus}
                    placeholder="Status will be here" />
            }
        </div>
    );
}

export default ProfileStatus;





